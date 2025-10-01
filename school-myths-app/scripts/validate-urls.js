#!/usr/bin/env node

/**
 * URL Validation Script for School Myths
 *
 * Checks all URLs in myths.js to ensure they return 200 status codes.
 * Run with: node scripts/validate-urls.js
 */

import { myths } from '../src/data/myths.js';
import https from 'https';
import http from 'http';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

async function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, (response) => {
      const { statusCode } = response;
      resolve({
        url,
        status: statusCode,
        ok: statusCode >= 200 && statusCode < 400
      });
    });

    request.on('error', (error) => {
      resolve({
        url,
        status: 'ERROR',
        ok: false,
        error: error.message
      });
    });

    request.setTimeout(10000, () => {
      request.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        ok: false,
        error: 'Request timeout'
      });
    });
  });
}

async function validateAllUrls() {
  console.log(`${colors.blue}🔍 Validating URLs in myths.js...${colors.reset}\n`);

  let totalUrls = 0;
  let validUrls = 0;
  let invalidUrls = [];

  // Collect all URLs first
  const urlsToCheck = [];
  for (const myth of myths) {
    if (myth.references && myth.references.length > 0) {
      for (const ref of myth.references) {
        urlsToCheck.push({ myth, ref });
        totalUrls++;
      }
    }
  }

  // Check URLs with limited concurrency
  for (let i = 0; i < urlsToCheck.length; i++) {
    const { myth, ref } = urlsToCheck[i];

    console.log(`[${i + 1}/${totalUrls}] Checking: ${ref.url}`);

    const result = await checkUrl(ref.url);

    if (result.ok) {
      console.log(`  ${colors.green}✅ ${result.status}${colors.reset} - ${ref.title}`);
      validUrls++;
    } else {
      console.log(`  ${colors.red}❌ ${result.status}${colors.reset} - ${ref.title}`);
      if (result.error) {
        console.log(`     Error: ${result.error}`);
      }
      invalidUrls.push({
        myth: myth.id,
        mythTitle: myth.myth,
        reference: ref,
        status: result.status,
        error: result.error
      });
    }

    // Small delay to be nice to servers
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Summary
  console.log(`${colors.blue}📊 Validation Summary:${colors.reset}`);
  console.log(`Total URLs: ${totalUrls}`);
  console.log(`Valid URLs: ${colors.green}${validUrls}${colors.reset}`);
  console.log(`Invalid URLs: ${colors.red}${invalidUrls.length}${colors.reset}`);
  console.log(`Success Rate: ${Math.round((validUrls / totalUrls) * 100)}%\n`);

  if (invalidUrls.length > 0) {
    console.log(`${colors.red}🚨 Invalid URLs Found:${colors.reset}`);
    invalidUrls.forEach(invalid => {
      console.log(`\n  Myth ${invalid.myth}: ${invalid.mythTitle}`);
      console.log(`  📄 ${invalid.reference.title}`);
      console.log(`  🔗 ${invalid.reference.url}`);
      console.log(`  ❌ Status: ${invalid.status}`);
      if (invalid.error) {
        console.log(`  💥 Error: ${invalid.error}`);
      }
    });

    console.log(`\n${colors.yellow}⚠️  Please fix these URLs before committing!${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`${colors.green}🎉 All URLs are valid!${colors.reset}`);
    process.exit(0);
  }
}

// Only run if called directly
if (import.meta.url === `file://${process.argv[1]}` || import.meta.url.endsWith('validate-urls.js')) {
  validateAllUrls().catch(console.error);
}
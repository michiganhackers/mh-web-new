#!/usr/bin/env node
'use-strict';

const fs = require("fs");
const path = require("path");

const PUBLIC = "public";
const LEAD_IMAGES = path.join(PUBLIC, "leadership");

if (!fs.existsSync(LEAD_IMAGES) || fs.readdirSync(LEAD_IMAGES).length === 0) {
    console.error("Lead images not found.");
    process.exitCode = 1;
}

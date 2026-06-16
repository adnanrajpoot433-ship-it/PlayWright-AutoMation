import { test, expect } from "@playwright/test";
import fs from "fs";
import * as XLSX from "xlsx";

// pre requisite
// npm install xlsx

//Loaded Excel file
//FILE--> workbook--> sheets--> rows &columns
const ExcelPath='.github/testData/data.xlsx';

const workbook=XLSX.readFile(ExcelPath);

const SheetName=workbook.SheetNames[0];

const worksheet=workbook.Sheets[SheetName]

//convert sheet into json 

const loginData=XLSX.utils.sheet_to_json(worksheet);

// main Test
test.describe("Login data driven test", () => {

  for (const {email, password, validity} of loginData) {


    test(`Login test with email: ${email} and password: ${password}`, async ({ page }) => {

      await page.goto("https://demowebshop.tricentis.com/login");

      // fill login form
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator('input[value="Log in"]').click();

      if (validity.toLowerCase() === "valid") {

        const logoutLink = page.locator('a[href="/logout"]');
        await expect(logoutLink).toBeVisible({ timeout: 5000 });

      } else {

        const errorMessage = page.locator(".validation-summary-errors");
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }

    });
  }

});
import { test, expect } from "@playwright/test";
import { config } from "../utils/config";

// test.describe("Without Login", () => {
//   test("Home", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByText(
//         "The Global database on the Implementation of Food and Nutrition Action (GIFNA) is an interactive platform for sharing standardized information on food and nutrition policies and actions,"
//       )
//     ).toBeVisible();
//     await expect(page.getByText("Features")).toBeVisible();
//     await expect(page.getByText("Nutritional Info")).toBeVisible();
//   });
//   test("Map", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/map");
//     await page.waitForLoadState("networkidle");
//     await expect(page.getByText("Map.")).toBeVisible();
//     await expect(page.getByText("Use the filters below to")).toBeVisible();
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Filter by time period of" })
//     ).toBeVisible();
//     await expect(page.getByText("*Type: A = Programmes and")).toBeVisible();
//   });
//   test("Scorecards and data summaries", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/summaries");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Scorecards and data summaries" })
//     ).toBeVisible();
//     await expect(
//       page.getByText(
//         "Scorecards and data summaries present data in GIFNA in maps and data tables for"
//       )
//     ).toBeVisible();
//     await expect(page.getByText("Country score cards:")).toBeVisible();
//     await expect(page.getByText("Data summaries:")).toBeVisible();
//     await expect(page.getByText("Nutrition policies")).toBeVisible();
//     await expect(page.getByText("Healthy food and food")).toBeVisible();
//   });
//   test("TFA Country Score Card", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/summary/TFA");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "TFA Country Score Card" })
//     ).toBeVisible();
//     await expect(page.getByText("More than half of the world's")).toBeVisible();
//     await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
//   });
//   test("Sodium Country Score Card", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/summary/sodium");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Sodium Country Score Card" })
//     ).toBeVisible();
//     await expect(page.getByText("More than a quarter of the")).toBeVisible();
//     await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
//   });
//   test("Sugars Country Score Card", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/summary/sugars");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Sugars Country Score Card" })
//     ).toBeVisible();
//     await expect(page.getByText("More than a fifth of the")).toBeVisible();
//     await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
//   });
//   test("Countries", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/countries");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Countries" })
//     ).toBeVisible();
//     await expect(page.getByPlaceholder("Type a country")).toBeVisible();
//     await expect(
//       page.getByText(
//         "ABCDEFGHIJKLMNOPQRSTUVWXYZ WHO member states Areas and territories A"
//       )
//     ).toBeVisible();
//     await expect(
//       page.getByRole("button", { name: "By country" })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("button", { name: "By WHO region" })
//     ).toBeVisible();
//     await expect(page.getByText("Download:")).toBeVisible();
//   });
//   test("Search", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/search");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "Search", exact: true })
//     ).toBeVisible();
//     await expect(page.getByText("Use the filters to narrow")).toBeVisible();
//     await expect(page.getByText("Search result -")).toBeVisible();
//     await expect(page.getByText("Search history :-")).toBeVisible();
//     await expect(
//       page.getByRole("columnheader", { name: "WHO region" })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("columnheader", { name: "Country" })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("columnheader", { name: "Title" })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("columnheader", { name: "Type" })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("columnheader", { name: "Start year" })
//     ).toBeVisible();
//     await expect(page.getByText("Download:")).toBeVisible();
//     await expect(page.getByText("*Type: A = Programmes and")).toBeVisible();
//     await expect(
//       page.getByRole("heading", { name: "Search filters" })
//     ).toBeVisible();
//     await expect(page.getByText("Data type", { exact: true })).toBeVisible();
//     await expect(page.getByText("Regions", { exact: true })).toBeVisible();
//     await expect(
//       page.locator("#accordion4Example").getByText("Countries", { exact: true })
//     ).toBeVisible();
//     await expect(page.getByText("Filter by topics")).toBeVisible();
//     await expect(page.getByText("Advanced filters")).toBeVisible();
//   });
//   test("About GIFNA", async ({ page }) => {
//     await page.goto("https://gifna-test.who.int/about-us");
//     await page.waitForLoadState("networkidle");
//     await expect(
//       page.getByRole("heading", { name: "About GIFNA", exact: true })
//     ).toBeVisible();
//     await expect(
//       page.getByText(
//         "WHO Department of Nutrition and Food Safety (NFS) is committed to supporting"
//       )
//     ).toBeVisible();
//     await expect(page.getByRole("heading", { name: "Purpose" })).toBeVisible();
//     await expect(
//       page.getByRole("heading", { name: "Data", exact: true })
//     ).toBeVisible();
//     await expect(
//       page.getByRole("heading", { name: "Data sources" })
//     ).toBeVisible();
//     await expect(page.getByRole("heading", { name: "History" })).toBeVisible();
//     await expect(
//       page.getByRole("heading", { name: "Acknowledgments" })
//     ).toBeVisible();
//     await expect(page.getByText("WHO resources")).toBeVisible();
//     await expect(page.getByText("Partners and data sources")).toBeVisible();
//     await expect(page.getByText("Donors.")).toBeVisible();
//   });
// });
test.describe("With Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    // await page.waitForLoadState("networkidle");
    // await page
    //   .locator("#navbarNavDropdown")
    //   .getByRole("button", { name: "Log in" })
    //   .click();
    // await page.waitForLoadState("networkidle");
    await page.click('[data-cy="SignUpPageLogin"]');
    await page.waitForLoadState("networkidle");
    await page.fill('[name="loginfmt"]', config.username);
    await page.click('[value="Next"]');
    await page.waitForLoadState("networkidle");
    await page.fill('[name="passwd"]', config.password);
    await page.click('[value="Sign in"]');
    await page.waitForLoadState("networkidle");
    await page.click('[value="Yes"]');
    await page.waitForLoadState("networkidle");
  });

  test("Home", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByText(
        "The Global database on the Implementation of Food and Nutrition Action (GIFNA) is an interactive platform for sharing standardized information on food and nutrition policies and actions,"
      )
    ).toBeVisible();
    await expect(page.getByText("Features")).toBeVisible();
    await expect(page.getByText("Nutritional Info")).toBeVisible();
  });
  test("Map", async ({ page }) => {
    await page.goto("/map");
    await page.waitForLoadState("networkidle");
    await expect(page.getByText("Map.")).toBeVisible();
    await expect(page.getByText("Use the filters below to")).toBeVisible();
    // await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Filter by time period of" })
    ).toBeVisible();
    await expect(page.getByText("*Type: A = Programmes and")).toBeVisible();
  });
  test("Scorecards and data summaries", async ({ page }) => {
    await page.goto("/summaries");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Scorecards and data summaries" })
    ).toBeVisible();
    await expect(
      page.getByText(
        "Scorecards and data summaries present data in GIFNA in maps and data tables for"
      )
    ).toBeVisible();
    await expect(page.getByText("Country score cards:")).toBeVisible();
    await expect(page.getByText("Data summaries:")).toBeVisible();
    await expect(page.getByText("Nutrition policies")).toBeVisible();
    await expect(page.getByText("Healthy food and food")).toBeVisible();
  });
  test("TFA Country Score Card", async ({ page }) => {
    await page.goto("/summary/TFA");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "TFA Country Score Card" })
    ).toBeVisible();
    await expect(page.getByText("More than half of the world's")).toBeVisible();
    await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
  });
  test("Sodium Country Score Card", async ({ page }) => {
    await page.goto("/summary/sodium");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Sodium Country Score Card" })
    ).toBeVisible();
    await expect(page.getByText("More than a quarter of the")).toBeVisible();
    await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
  });
  test("Sugars Country Score Card", async ({ page }) => {
    await page.goto("/summary/sugars");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Sugars Country Score Card" })
    ).toBeVisible();
    await expect(page.getByText("More than a fifth of the")).toBeVisible();
    await expect(page.getByText("Export Map 1. National policy")).toBeVisible();
  });
  test("Countries", async ({ page }) => {
    await page.goto("/countries");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Countries" })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Type a country")).toBeVisible();
    await expect(
      page.getByText(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ WHO member states Areas and territories A"
      )
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "By country" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "By WHO region" })
    ).toBeVisible();
    await expect(page.getByText("Download:")).toBeVisible();
  });
  test("Search", async ({ page }) => {
    await page.goto("/search");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Search", exact: true })
    ).toBeVisible();
    await expect(page.getByText("Use the filters to narrow")).toBeVisible();
    await expect(page.getByText("Search result -")).toBeVisible();
    await expect(page.getByText("Search history :-")).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "WHO region" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Country" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Title" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Type" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Start year" })
    ).toBeVisible();
    await expect(page.getByText("Download:")).toBeVisible();
    await expect(page.getByText("*Type: A = Programmes and")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Search filters" })
    ).toBeVisible();
    await expect(page.getByText("Data type", { exact: true })).toBeVisible();
    await expect(page.getByText("Regions", { exact: true })).toBeVisible();
    await expect(
      page.locator("#accordion4Example").getByText("Countries", { exact: true })
    ).toBeVisible();
    await expect(page.getByText("Filter by topics")).toBeVisible();
    await expect(page.getByText("Advanced filters")).toBeVisible();
  });
  test("About GIFNA", async ({ page }) => {
    await page.goto("/about-us");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "About GIFNA", exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(
        "WHO Department of Nutrition and Food Safety (NFS) is committed to supporting"
      )
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Purpose" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Data", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Data sources" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "History" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Acknowledgments" })
    ).toBeVisible();
    await expect(page.getByText("WHO resources")).toBeVisible();
    await expect(page.getByText("Partners and data sources")).toBeVisible();
    await expect(page.getByText("Donors.")).toBeVisible();
  });

  test("Dashboard", async ({ page }) => {
    await page.goto("/admin/dashboard");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Dashboard " })
    ).toBeVisible();
    await expect(page.getByText("Welcome to your dashboard")).toBeVisible();
    await expect(page.getByText("Home Dashboard")).toBeVisible();
    await expect(page.getByText("My drafts", { exact: true })).toBeVisible();
    await expect(
      page.getByText("Other’s drafts needs review", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("Others draft sent to me for correction")
    ).toBeVisible();
    await expect(
      page.getByText("My published contents", { exact: true })
    ).toBeVisible();
  });
  test("Profile", async ({ page }) => {
    await page.goto("/admin/profile");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "User Profile " })
    ).toBeVisible();
    await expect(page.getByText("Home Profile")).toBeVisible();
    await expect(page.getByText("Subscription", { exact: true })).toBeVisible();
  });
  test("Indicator - Indicator management", async ({ page }) => {
    await page.goto("/admin/indicatortype");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Indicator Type " })
    ).toBeVisible();
    await expect(
      page.getByText("Home Indicator Indicator management")
    ).toBeVisible();
    await expect(
      page.getByText("Add Indicator Type", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Indicator code" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Indicator name" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Filter criteria" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: " Add" })).toBeVisible();
  });
  test("Indicator - Indicator value", async ({ page }) => {
    await page.goto("/admin/mapindicator");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Map Indicator Options" })
    ).toBeVisible();
    await expect(page.getByText("Description")).toBeVisible();
    await expect(
      page.getByText(
        "Map Indicator Options Description Home Indicator Indicator value"
      )
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Add Map Indicator" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Order" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Indicator" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Value" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Color" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Action" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Add" })).toBeVisible();
  });
  test("Taxonomies", async ({ page }) => {
    await page.goto("/admin/taxonomies");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Taxonomies " })
    ).toBeVisible();
    await expect(page.getByText("Taxonomy is for categorizing")).toBeVisible();
    await expect(page.getByText("Home Taxonomies")).toBeVisible();
    await expect(
      page.getByText("Vocabulary name", { exact: true })
    ).toBeVisible();
    await expect(
      page.locator("#taxonomiesHeader").getByText("Actions")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Reset to alphabetical" })
    ).toBeVisible();
  });
  test("Bulk Import & Export", async ({ page }) => {
    await page.goto("/admin/bulkimportexport");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Bulk Import & Export " })
    ).toBeVisible();
    await expect(page.getByText("Home Bulk Import & Export")).toBeVisible();
    await expect(page.getByText("Import Export template")).toBeVisible();
    await expect(page.getByText("File upload *")).toBeVisible();
    await expect(page.getByText("Data type *")).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "ID" })).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Title" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Type" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Status" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Error" })
    ).toBeVisible();
  });
  test("Compose Email", async ({ page }) => {
    await page.goto("/admin/composeemail");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Compose email " })
    ).toBeVisible();
    await expect(page.getByText("Email type *")).toBeVisible();
    await expect(page.getByText("Date *")).toBeVisible();
    await expect(
      page.getByText("Should include revised content")
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Compose email" })
    ).toBeVisible();
  });
  test("Static pages", async ({ page }) => {
    await page.goto("/admin/static");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Static pages" })
    ).toBeVisible();
    await expect(page.getByText("Drafts")).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Title" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created by" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created date" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Actions" })
    ).toBeVisible();
    await expect(page.getByText("Published contents")).toBeVisible();
    await page.getByText("Published contents").click();
    await expect(
      page.getByRole("columnheader", { name: "Title" })
    ).toBeVisible();
    await expect(page.getByRole("columnheader", { name: "URL" })).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created by" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created date" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Actions" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: " Add" })).toBeVisible();
  });
  test("Content - Policy", async ({ page }) => {
    await page.goto("/admin/policies/create");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Enter policy" })
    ).toBeVisible();
    await expect(page.getByText("Home Content Policy")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fill the information for new" })
    ).toBeVisible();
    await expect(page.getByText("Policy title *")).toBeVisible();
    await expect(page.getByText("Government", { exact: true })).toBeVisible();
    await expect(page.getByText("UN", { exact: true })).toBeVisible();
    await expect(
      page.getByText("Intergovernmental bodies", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("Bilateral and donor agencies and lenders", {
        exact: true,
      })
    ).toBeVisible();
    await expect(
      page.getByText("International NGOs", { exact: true })
    ).toBeVisible();
  });
  test("Content - Programme", async ({ page }) => {
    await page.goto("/admin/programme/create");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Enter programme" })
    ).toBeVisible();
    await expect(page.getByText("Home Content Programme /")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fill the information for new" })
    ).toBeVisible();
    await expect(page.getByText("Title *")).toBeVisible();
    await expect(
      page.getByRole("button", { name: " Add location" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: " Add action" })
    ).toBeVisible();
    await expect(page.getByText("Government", { exact: true })).toBeVisible();
    await expect(page.getByText("UN", { exact: true })).toBeVisible();
    await expect(
      page.getByText("Intergovernmental bodies", { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText("Bilateral and donor agencies and lenders", {
        exact: true,
      })
    ).toBeVisible();
    await expect(
      page.getByText("International NGOs", { exact: true })
    ).toBeVisible();
  });
  test("Content - Mechanisms", async ({ page }) => {
    await page.goto("/admin/mechanisms/create");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Enter mechanisms" })
    ).toBeVisible();
    await expect(page.getByText("Home Content Mechanism")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fill the information for" })
    ).toBeVisible();
    await expect(page.getByText("Mechanism title *")).toBeVisible();

    await expect(page.getByText("Government", { exact: true })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Functions  " })
    ).toBeVisible();
    await expect(page.getByText("Mandate")).toBeVisible();
    await expect(page.getByText("Topics", { exact: true })).toBeVisible();
    await expect(page.getByText("Moderation notes *")).toBeVisible();
  });
  test("Content - Commitment", async ({ page }) => {
    await page.goto("/admin/commitment/create");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Enter commitment & smart" })
    ).toBeVisible();
    await expect(page.getByText("Home Content Commitment &")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Fill the information" })
    ).toBeVisible();
    await expect(page.getByText("Title of commitment *")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Sector  " })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "SMART commitments *  " })
    ).toBeVisible();
  });
  test("User management - Users", async ({ page }) => {
    await page.goto("/admin/users");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "User Management " })
    ).toBeVisible();
    await expect(page.getByText("Home User management Users")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Users " })).toBeVisible();
    await expect(page.getByRole("button", { name: "Filter" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: " Export user" })
    ).toBeVisible();
    await expect(page.getByText("Title of commitment *")).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Name", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "User name" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Email" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Organization" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Status" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Role" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Interested country" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Start date" })
    ).toBeVisible();
  });

  test("User management - Roles", async ({ page }) => {
    await page.goto("/admin/roles");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h3").filter({ hasText: "Roles" })).toBeVisible();
    await expect(page.getByText("Home User management Roles")).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Name" })
    ).toBeVisible();
  });

  test("Layout - Header & Footer", async ({ page }) => {
    await page.goto("/admin/site-customization");
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Header & Footer" })
    ).toBeVisible();
    await expect(page.getByText("Home Layout Header & Footer")).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created by" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Created date" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Last updated by" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Last update" })
    ).toBeVisible();
    await expect(
      page.getByRole("columnheader", { name: "Actions" })
    ).toBeVisible();
    await expect(page.getByText("Drafts")).toBeVisible();
    await expect(page.getByText("Published contents")).toBeVisible();
  });
});

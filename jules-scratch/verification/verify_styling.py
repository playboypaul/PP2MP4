from playwright.sync_api import sync_playwright, Page

def run_test():
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print("Browser launched.")
        try:
            print("Navigating to http://localhost:5173...")
            page.goto("http://localhost:5173", timeout=60000)
            print("Navigation complete.")

            print("Waiting for 5 seconds to ensure content loads...")
            page.wait_for_timeout(5000)

            print("Taking screenshot...")
            page.screenshot(path="jules-scratch/verification/styling_verification.png")
            print("Screenshot saved to jules-scratch/verification/styling_verification.png")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()
            print("Browser closed.")

if __name__ == "__main__":
    run_test()
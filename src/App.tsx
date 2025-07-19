import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

export function App() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Mova</h1>
        <p className="text-xl text-muted-foreground">Help & Support</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Mova helps you track your movement and stay active throughout the day.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Download and install the app from your device's app store</li>
              <li>Grant necessary permissions for motion tracking</li>
              <li>Set your daily activity goals</li>
              <li>Start moving and watch your progress!</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">App not tracking movement</h3>
                <p className="text-muted-foreground text-sm">
                  Make sure you've granted motion and fitness permissions in your device settings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data not syncing</h3>
                <p className="text-muted-foreground text-sm">
                  Check your internet connection and ensure the app is up to date from your device's app store.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Battery usage concerns</h3>
                <p className="text-muted-foreground text-sm">
                  The app is optimized for minimal battery usage. You can adjust tracking frequency in app settings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy & Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your movement data is stored locally on your device and only shared with health platforms (if enabled). 
              We do not collect or share your personal information with third parties.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Need help with something not covered here? We're here to help!
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-medium mb-2">Email Support:</p>
              <a 
                href="mailto:movastaysinmotionar@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                movastaysinmotionar@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Please include your device model and operating system version when contacting support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;

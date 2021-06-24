#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import Firebase
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions:
      [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    FirebaseApp.configure()
    return true
  }
}
@property (nonatomic, strong) UIWindow *window;

@end

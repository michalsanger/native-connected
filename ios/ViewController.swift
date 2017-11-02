import UIKit
import React

class ViewController: UIViewController {
    
    @IBAction func buttonTapped(_ sender: UIButton) {
        NSLog("buttonTapped")
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["records":
            [
                ["name":"aaa", "value":"123"],
                ["name":"bbb", "value":"456"],
                ["name":"ccc", "value":"789"]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "native-connected",
            initialProperties: mockData as! [AnyHashable : Any],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }
    
}


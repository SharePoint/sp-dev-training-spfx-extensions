# DEMO: Introduction to Extensions & Application Customizer

In this demo you will deploy a SharePoint Framework (SPFx) application customizer extension to all sites in a SharePoint Online tenant.

1. Open a command prompt and navigate to the folder that contains the built project for this demo.
1. Download and install all necessary dependencies using the following command:

    ```shell
    npm install
    ```

1. Build and package the solution by running the following commands one at a time:

    ```shell
    gulp build
    gulp bundle --ship
    gulp package-solution --ship
    ```

1. In the browser, navigate to your SharePoint Online's tenant **App Catalog** site.
    1. Select the **Apps for SharePoint** list in the left-hand navigation.
    1. Drag the generated **./sharepoint/solution/*.sppkg** file into the **Apps for SharePoint** list.
    1. In the **Do you trust spfx-app-customizer-client-side-solution?** dialog...
        1. Select the checkbox **Make this solution available to all sites in the organization**
        1. Notice the message **This package contains an extension which will be automatically enabled across sites...**.
        1. Select **Deploy**.

        ![Screenshot deploying the extension to the entire tenant](../../Images/appcust-tenantwidedeploy-01.png)

    1. Select **Site contents** in the left-hand navigation.
    1. Select **Tenant Wide Extensions**. Depending on when your tenant was created the **Tenant Wide Extensions** list may be hidden. If
    you do not see the list in the Site Contents then you will have to navigate to it manually. Do this by appending `/Lists/TenantWideExtensions/AllItems.aspx` to the URL of the app catalog site.

        ![Screenshot displaying the Tenant Wide Extensions list](../../Images/appcust-tenantwidedeploy-02.png)

    1. Notice the application customizer is present, with the specified properties, in the list:

        ![Screenshot displaying the Tenant Wide Extensions list](../../Images/appcust-tenantwidedeploy-03.png)

1. In a separate browser window, navigate to any modern page in any modern site within your SharePoint Online tenant. You should see the extension appear in the tenant.

> *NOTE: It may take up to 20 minutes for a tenant-wide extension to get deployed across the SharePoint online tenant so you may need to wait to fully test your deployment was successful.*

1. Stop the local web server by pressing <kbd>CTRL</kbd>+<kbd>C</kbd> in the console/terminal window.
# DEMO: List View Command Sets

In this demo you will create a SharePoint Framework (SPFx) command set extension that will display a few buttons in a SharePoint list.

1. In a browser, navigate to a SharePoint Online modern site collection where you want to test the field customizer.
1. Select the **Site contents** link in the left-hand navigation.
1. Select the list **Work Status** created in the last exercise:

    ![Screenshot of sample data in a list](../../Images/fieldcust-setuplist03.png)

1. Open a command prompt and navigate to the folder that contains the built project for this demo.
1. Download and install all necessary dependencies using the following command:

    ```shell
    npm install
    ```

1. Update the properties for the serve configuration used to test and debug the extension:
    1. Locate and open the **./config/serve.json** file.
    1. Copy in the full URL (including **AllItems.aspx**) of the list `serveConfigurations.default.pageUrl` property.
1. Run the project by executing the following command:

    ```shell
    gulp serve
    ```

1. When prompted, select the **Load debug scripts** button.
1. Notice when the page loads, notice a new button in the toolbar. When the **Always On** button is selected, a dialog appears displaying the message prefix defined in the public properties as well as the total number of items selected.

    ![Screenshot of the command set Always On button](../../Images/commandset-test01.png)

1. Select one item in the list. Notice a new button appears. Select the button and notice how the dialog has changed:

    ![Screenshot of the command set One Item Selected button](../../Images/commandset-test02.png)

1. Select a second item in the list. Notice a new button appears. Select the button and notice how the dialog has changed:

    ![Screenshot of the command set Two Item Selected button](../../Images/commandset-test03.png)

1. Stop the local web server by pressing <kbd>CTRL</kbd>+<kbd>C</kbd> in the console/terminal window.

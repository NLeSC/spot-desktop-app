# SPOT Desktop Application

## Please check [release page](https://github.com/fdiblen/spot-desktop-app/releases) for downloads.

#### **SPOT-Desktop is still under development**

* install **node.js**
  - Ubuntu
    ```bash
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
  - Fedora
    ```bash
    curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
    yum -y install nodejs
    ```
  - Arch Linux
    ```bash
    pacman -S nodejs npm
    ```

  - For Windows check [nodejs](https://nodejs.org/en/download/package-manager/#windows) page.


* clone this repository
  ```bash
  git clone https://github.com/fdiblen/spot-desktop.git && cd spot-desktop
  ```

* get latest version of SPOT:
  ```bash
  npm run get-spot
  ```

* install dependencies:
  ```bash
  npm install
  ```

* build packages:
  ```bash
  npm run dist
  ```

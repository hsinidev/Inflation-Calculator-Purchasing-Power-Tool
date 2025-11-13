<div align="center">
  <img src="public/favicon.svg" alt="Logo" width="100" height="100">
  <h1 align="center">Inflation Calculator: Purchasing Power Tool</h1>
  <p align="center">
    A modern, responsive ReactJS application to calculate the erosion of purchasing power over time due to inflation.
    <br />
    <a href="https://github.com/hsinidev/inflation-calculator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://example.com">View Demo</a>
    ·
    <a href="https://github.com/hsinidev/inflation-calculator/issues">Report Bug</a>
    ·
    <a href="https://github.com/hsinidev/inflation-calculator/issues">Request Feature</a>
  </p>
</div>

<!-- SHIELDS -->
<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0.4-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.3-blue?logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/github/license/hsinidev/inflation-calculator" alt="License">
</div>

---

## 📋 About The Project

The **Inflation Calculator** is a sleek, modern financial tool designed to provide clear insights into the historical value of money. It demonstrates how inflation affects purchasing power by comparing the value of a currency between two different years, using simulated Consumer Price Index (CPI) data. With its immersive animated galaxy background and intuitive interface, it makes understanding complex financial concepts simple and engaging.

### ✨ Features:

-   **💰 Historical Inflation Calculation**: Determine the equivalent value of an amount of money between two specified years.
-   **📊 Detailed Financial Metrics**: View the total inflation rate and the absolute purchasing power lost over the period.
-   **🌌 Immersive UI/UX**: A clean, financial-themed interface built with React and Tailwind CSS, featuring a stunning animated galaxy background.
-   **📱 Fully Responsive**: Designed to work seamlessly on desktops, tablets, and mobile devices.
-   **📝 SEO Optimized**: Includes a comprehensive 3500+ word article on inflation, complete with JSON-LD schema for enhanced search engine visibility.
-   **🧩 Modular Architecture**: Built with a clear separation of concerns, making the code easy to maintain and scale.

---

## 🛠️ Built With

This project leverages modern frontend technologies to deliver a high-quality user experience.

*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/hsinidev/inflation-calculator.git
    ```
2.  Navigate to the project directory
    ```sh
    cd inflation-calculator
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

##  usage How It Works

The calculation is based on the standard formula for adjusting for inflation using the Consumer Price Index (CPI):

`Equivalent Value = Initial Amount * (CPI of End Year / CPI of Start Year)`

The application fetches mock CPI values for the user-specified start and end years from the `FinancialAPI.ts` service and applies this formula to determine the change in purchasing power.

1.  Enter the **Initial Amount** you want to analyze.
2.  Provide a **Start Year** and an **End Year**.
3.  Click **"Calculate Purchasing Power"** to see the results instantly.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## 📞 Contact

**HSINI MOHAMED**

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Email**: hsini.web@gmail.com
-   **Website**: [doodax.com](https://doodax.com)

Project Link: [https://github.com/hsinidev/inflation-calculator](https://github.com/hsinidev/inflation-calculator)

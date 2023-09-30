function calculateRisk() {
    // Get input values
    const capital = parseFloat(document.getElementById("capital").value);
    const position = document.getElementById("position").value;
    const entryPrice = parseFloat(document.getElementById("entryPrice").value);
    const stopPrice = parseFloat(document.getElementById("stopPrice").value);

    // Calculate Total Tick
    let totalTick;
    if (position === "Long") {
        totalTick = entryPrice - stopPrice;
    } else if (position === "Short") {
        totalTick = stopPrice - entryPrice;
    }

    // Calculate Risk Amount
    const riskAmount = totalTick * 25; // Assuming RM25 per tick

    // Calculate Risk Percentage
    const riskPercentage = (riskAmount / capital) * 100;

    // Display results
    document.getElementById("result").innerHTML = `
        <p>Risk Amount: RM ${riskAmount.toFixed(2)}</p>
        <p>Risk Percentage: ${riskPercentage.toFixed(2)}%</p>
    `;
}

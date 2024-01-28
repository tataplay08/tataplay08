// pH data
var phData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
        label: 'pH Level',
        data: [7.0, 7.2, 6.8, 7.5, 7.1],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Chart configuration
var ctx = document.getElementById('phChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: phData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

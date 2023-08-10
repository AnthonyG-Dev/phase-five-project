import React, { useEffect } from "react";
import { Chart } from "chart.js/auto"; // Use 'chart.js/auto' for automatic imports
import '../css/Home.css'
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

const colors = ['#007bff', '#00ffff', '#c5c5c5', '#c3e6cb', '#dc3545', '#6c757d'];

const Home = ( loggedInUser) => {
  const donutOptions = {
    cutoutPercentage: 85,
    legend: {
      position: 'bottom',
      padding: 5,
      labels: {
        pointStyle: 'circle',
        usePointStyle: true,
      }
    }
  };

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
    datasets: [
      {
        data: [645, 183, 603, 689, 632,],
        backgroundColor: colors[0],
        borderColor: colors[0],
        borderWidth: 4,
        pointBackgroundColor: colors[0]
      },
      // Uncomment and update the dataset as needed
      {
        data: [639, 465, 493, 478, 589, 632, 674],
        backgroundColor: colors[1],
        borderColor: colors[1],
        borderWidth: 4,
        pointBackgroundColor: colors[1]
      }
    ]
  };

  useEffect(() => {
    // Large line chart
    const chLine = document.getElementById("chLine");
    if (chLine) {
      new Chart(chLine, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          responsive: true,
        },
      });
    }

    // Large pie/donut chart
    const chPie = document.getElementById("chPie");
    if (chPie) {
      new Chart(chPie, {
        type: "pie",
        data: {
          labels: ["Desktop", "Phone", "Tablet", "Unknown"],
          datasets: [
            {
              backgroundColor: [colors[1], colors[0], colors[2], colors[5]],
              borderWidth: 0,
              data: [50, 40, 15, 5],
            },
          ],
        },
        plugins: [
          {
            beforeDraw: function (chart) {
              const width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;
              ctx.restore();
              const fontSize = (height / 70).toFixed(2);
              ctx.font = fontSize + "em sans-serif";
              ctx.textBaseline = "middle";
              const text =
                chart.config.data.datasets[0].data[0] + "%";
              const textX = Math.round((width - ctx.measureText(text).width) / 2);
              const textY = height / 2;
              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
        options: { layout: { padding: 0 }, legend: { display: false }, cutoutPercentage: 80 },
      });
    }

    // Bar chart
    const chBar = document.getElementById("chBar");
    if (chBar) {
      new Chart(chBar, {
        type: "bar",
        data: {
          labels: ["React", "Ruby", "CSS", "HTML", "JavaScript"],
          datasets: [
            {
              data: [589, 445, 483, 503, 689, 692, 634],
              backgroundColor: colors[0],
            },
            {
              data: [639, 465, 493, 478, 589, 632, 674],
              backgroundColor: colors[1],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                barPercentage: 0.4,
                categoryPercentage: 0.5,
              },
            ],
          },
        },
      });
    }

    // Donut 1
    const chDonutData1 = {
      labels: ['React', 'Ruby', 'Others(HTML,CSS,JS)'],
      datasets: [
        {
          backgroundColor: colors.slice(0, 3),
          borderWidth: 0,
          data: [74, 11, 40],
        },
      ],
    };
    const chDonut1 = document.getElementById("chDonut1");
    if (chDonut1) {
      new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
      });
    }

    // Donut 2
    const chDonutData2 = {
      labels: ['React', 'Ruby', 'Others(HTML,CSS,JS)'],
      datasets: [
        {
          backgroundColor: colors.slice(0, 3),
          borderWidth: 0,
          data: [40, 45, 30],
        },
      ],
    };
    const chDonut2 = document.getElementById("chDonut2");
    if (chDonut2) {
      new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions
      });
    }

    // Donut 3
    const chDonutData3 = {
      labels: ['React', 'Ruby', 'Others(HTML,CSS,JS)'],
      datasets: [
        {
          backgroundColor: colors.slice(0, 3),
          borderWidth: 0,
          data: [21, 45, 33],
        },
      ],
    };
    const chDonut3 = document.getElementById("chDonut3");
    if (chDonut3) {
      new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions
      });
    }

  }, []);

  return (
    <>
    <h3 className="Dashboard">Dashboard</h3>
    <img className="dashboard_image" src={loggedInUser.loggedInUser.avatar}/>
    <div className="home_links_div">
      <a id="home_link_left" className="home_links" href='/calendar'><IoIcons.IoIosPaper /> {loggedInUser.loggedInUser.name}'s Upcoming Events <IoIcons.IoIosPaper /></a>
      <a  id="home_link_center" className="home_links"href='/announcements'><FaIcons.FaBullhorn /> What has {loggedInUser.loggedInUser.name} missed ? <FaIcons.FaBullhorn /></a>
      <a href="/feed" id="home_link_right" className="home_links"><FaIcons.FaChalkboard />Catch Up With {loggedInUser.loggedInUser.name}'s Classes <FaIcons.FaChalkboard /></a>
    </div>
    <div id="chart_container" className="container" >
      <div className="row my-3">
        <div className="col">
        </div>
      </div>

      <div className="row my-2">
        <div className="col-md-6 py-1">
          <div className="card">
            ATTENDANCE:
            <div className="card-body">
              <canvas id="chLine"></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6 py-1">
          <div className="card">
            PERFOMANCE:
            <div className="card-body">
              <canvas id="chBar"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-md-4 py-1">
          <div className="card">
            <div className="card-body">
              <canvas id="chDonut1"></canvas>
              Languages preferred By Cohort-1
            </div>
          </div>
        </div>
        <div className="col-md-4 py-1">
          <div className="card">
            <div className="card-body">
              <canvas id="chDonut2"></canvas>
              Languages preferred By Cohort-2
            </div>
          </div>
        </div>
        <div className="col-md-4 py-1">
          <div className="card">
            <div className="card-body">
              <canvas id="chDonut3"></canvas>
              Languages preferred By Cohort-3
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

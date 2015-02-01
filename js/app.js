/* DEBUG DATA */
var jan2015 = moment().year(2015).month(0).toISOString();
var feb2015 = moment().year(2015).month(1).toISOString();
var mar2015 = moment().year(2015).month(2).toISOString();

var strengthMonths = {};
strengthMonths[jan2015] = 14;
strengthMonths[feb2015] = 11;
strengthMonths[mar2015] = 5;

var mindfulnessMonths = {};
mindfulnessMonths[jan2015] = 2;
mindfulnessMonths[feb2015] = 4;
mindfulnessMonths[mar2015] = 10;

var data = [
  {
    id:0,
    name:"Strength",
    months:strengthMonths,
  },
  {
    id:1,
    name:"Mindfulness",
    months:mindfulnessMonths,
  }
];
/* END DEBUG DATA */


var Goalie = React.createClass({
  getInitialState: function() {
    return {data:[]};
  },
  componentDidMount: function() {
    // TODO: Request data from Dropbox
    console.log("mounted!", data);
    this.setState({data: data});
  },
  render: function() {
    var charts, i;
    charts = this.state.data.map(function(chart) {
      return (
	<GoalieChart key={chart.id}></GoalieChart>
      );
    });
    return <div>{charts}</div>;
  }
});

var GoalieChart = React.createClass({
  render: function() {
    return <GoalieBar></GoalieBar>;
  }
});

var GoalieBar = React.createClass({
  render: function() {
    return <div>TODO</div>;
  }
});

React.render(
  <Goalie data={data} />,
  document.getElementById('charts')
);

import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView
} from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

const screenWidth = Dimensions.get("window").width;
export default class App extends Component {

 

  constructor(props) {
    super(props);
    this.state = {
      
      dataGrafica:[ 
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100],
        dataGrafica2:[ 
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100],
          
          var1 : 0,
          var2 : 0,
          var3 : 0,
          var4 : 0,
          var5 : 0,
          dataGrafica3:[ 
            Math.random(),
            Math.random(),
            Math.random()],
            
            var11 : 0,
            var22 : 0,
            var33 : 0,
            
            
    };
  }
  
 
  
  render() {
    data  = [
      {
        name: "Seoul",
        population: this.state.var1,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Toronto",
        population: this.state.var2,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Beijing",
        population: this.state.var3,
        color: "purple",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "New York",
        population: this.state.var4,
        color: "black",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Moscow",
        population: this.state.var5,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      }
    ];

    const dataProgress = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [this.state.var11, this.state.var22,this.state.var33]
    };

    return (
      <ScrollView >
        <Button 
          title="Modificar valores"
          onPress = { this.aumentaContador }
          ></Button>
         <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: this.state.dataGrafica              
              }
            ]
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        /><Button 
        title="Modificar valores"
        onPress = { this.aumentaContador2 }
        ></Button>
       <PieChart
       data={data}
       width={screenWidth}
       height={220}
       chartConfig={chartConfig}
       accessor="population"
       backgroundColor="transparent"
       paddingLeft="15"
       absolute
      />
      <Button 
        title="Modificar valores"
        onPress = { this.aumentaContador3 }
        ></Button>
        
        <ProgressChart
        data={dataProgress}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        hideLegend={false}
      />

      </ScrollView>
    )
  }

  aumentaContador = () => {
    
    this.setState({
      dataGrafica:[ 
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100] 
    
    }); 
  }

  aumentaContador2 = () => {
    this.setState({
      var1 : Math.random() * 100,
      var2 : Math.random() * 100,
      var3 : Math.random() * 100,
      var4 : Math.random() * 100,
      var5 : Math.random() * 100,
    
    }); 
  }
  aumentaContador3 = () => {
    this.setState({
      var11 : Math.random(),
      var22 : Math.random(),
      var33 : Math.random(),
      
    
    }); 
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
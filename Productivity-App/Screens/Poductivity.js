import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Platform, FlatList } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../Styles/GlobalStyles'
import ProgressBar from 'react-native-progress/Bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LineChart } from 'react-native-chart-kit'

const profile = require("../assets/person.png")
const screenWidth = Dimensions.get('window').width

// Sample data for productivity metrics
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const productivityData = {
  labels: weekDays,
  datasets: [
    {
      data: [65, 78, 82, 75, 68, 55, 70],
      color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
      strokeWidth: 2
    }
  ]
}

const categoryData = [
  { name: "Work", completed: 9, total: 15, color: "#9B59B6", icon: "✓" },
  { name: "Books", completed: 6, total: 24, color: "#3498DB", icon: "📚" },
  { name: "Emails", completed: 4, total: 15, color: "#F39C12", icon: "📧" },
  { name: "Urgent", completed: 7, total: 24, color: "#2ECC71", icon: "🔔" }
]

const upcomingTasks = [
  { id: 1, title: "Complete project proposal", deadline: "Today, 5:00 PM", priority: "High" },
  { id: 2, title: "Review quarterly report", deadline: "Tomorrow, 10:00 AM", priority: "Medium" },
  { id: 3, title: "Team meeting preparation", deadline: "Wed, 2:00 PM", priority: "Medium" },
  { id: 4, title: "Client presentation", deadline: "Fri, 11:00 AM", priority: "High" }
]

export default function Productivity() {
  const [activeButton, setActiveButton] = useState('productivity')
  
  const handleButtonPress = (buttonType) => {
    setActiveButton(buttonType)
  }
  
  const getButtonStyle = (buttonType) => {
    const baseStyle = buttonType === 'overview' 
      ? GlobalStyles.overviewButton 
      : GlobalStyles.productivityButton
    
    return {
      ...baseStyle,
      backgroundColor: activeButton === buttonType ? '#1e90ff' : 'transparent'
    }
  }
  
  const getTextStyle = (buttonType) => {
    const baseStyle = buttonType === 'overview' 
      ? GlobalStyles.overview 
      : GlobalStyles.productivity
    
    return {
      ...baseStyle,
      color: activeButton === buttonType ? 'white' : '#4f4f4f'
    }
  }

  const renderCategoryItem = ({ item }) => (
    <View style={GlobalStyles.categoryCard}>
      <View style={{
        ...GlobalStyles.categoryIconContainer,
        backgroundColor: item.color
      }}>
        <Text style={GlobalStyles.categoryIcon}>{item.icon}</Text>
      </View>
      <Text style={GlobalStyles.categoryCount}>{item.completed} Completed</Text>
      <Text style={GlobalStyles.categoryName}>{item.name}</Text>
      <ProgressBar 
        progress={item.completed / item.total} 
        width={screenWidth * 0.35} 
        height={5}
        borderWidth={0}
        color={item.color}
        unfilledColor={'#7f7f7f'}
      />
      <Text style={GlobalStyles.categoryTotal}>{item.completed}/{item.total}</Text>
    </View>
  )

  const renderTaskItem = ({ item }) => (
    <View style={GlobalStyles.taskItem}>
      <View style={{
        ...GlobalStyles.priorityIndicator,
        backgroundColor: item.priority === "High" ? "#E74C3C" : "#F39C12"
      }} />
      <View style={GlobalStyles.taskContent}>
        <Text style={GlobalStyles.taskTitle}>{item.title}</Text>
        <Text style={GlobalStyles.taskDeadline}>{item.deadline}</Text>
      </View>
      <TouchableOpacity style={GlobalStyles.taskCheckbox}>
        <View />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={GlobalStyles.appContainer}>
      <ScrollView 
        contentContainerStyle={{
          width: Platform.OS === 'ios' ? screenWidth : '100%',
          paddingBottom: 20
        }}
        nestedScrollEnabled={true}
      >
        <View style={GlobalStyles.welcomeMessageContainer}>
          <View>
            <Text style={GlobalStyles.welcomeMessage}>Hello</Text>
          </View>
          <View>
            <Text style={GlobalStyles.welcomeMessage}>Erlich Bachman</Text>
          </View>
        </View>
        
        <View style={GlobalStyles.homeButtonsContainer}>
          <TouchableOpacity 
            style={getButtonStyle('overview')} 
            onPress={() => handleButtonPress('overview')}
          >
            <Text style={getTextStyle('overview')}>Overview</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={getButtonStyle('productivity')}
            onPress={() => handleButtonPress('productivity')}
          >
            <Text style={getTextStyle('productivity')}>Productivity</Text>
          </TouchableOpacity>
        </View>
        
        {/* Weekly Productivity Chart */}
        <View style={GlobalStyles.chartContainer}>
          <Text style={GlobalStyles.sectionTitle}>Weekly Productivity</Text>
          <LineChart
            data={productivityData}
            width={screenWidth - 40}
            height={180}
            chartConfig={{
              backgroundColor: '#333',
              backgroundGradientFrom: '#333',
              backgroundGradientTo: '#333',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#1E90FF'
              }
            }}
            bezier
            style={GlobalStyles.chart}
          />
          <View style={GlobalStyles.averageContainer}>
            <View>
              <Text style={GlobalStyles.averageLabel}>Daily Average</Text>
              <Text style={GlobalStyles.averageValue}>70.4%</Text>
            </View>
            <View>
              <Text style={GlobalStyles.averageLabel}>Weekly Goal</Text>
              <Text style={GlobalStyles.averageValue}>75%</Text>
            </View>
          </View>
        </View>
        
        {/* Category Progress */}
        <View style={GlobalStyles.sectionContainer}>
          <Text style={GlobalStyles.sectionTitle}>Category Progress</Text>
          <FlatList
            data={categoryData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={GlobalStyles.categoriesHorizontal}
          />
        </View>
        
        {/* Focus Time */}
        <View style={GlobalStyles.sectionContainer}>
          <Text style={GlobalStyles.sectionTitle}>Focus Time</Text>
          <View style={GlobalStyles.focusContainer}>
            <View style={GlobalStyles.focusMetricsContainer}>
              <View style={GlobalStyles.focusMetric}>
                <Text style={GlobalStyles.focusMetricValue}>3.5h</Text>
                <Text style={GlobalStyles.focusMetricLabel}>Today</Text>
              </View>
              <View style={GlobalStyles.focusMetric}>
                <Text style={GlobalStyles.focusMetricValue}>18.2h</Text>
                <Text style={GlobalStyles.focusMetricLabel}>This Week</Text>
              </View>
              <View style={GlobalStyles.focusMetric}>
                <Text style={GlobalStyles.focusMetricValue}>68.5h</Text>
                <Text style={GlobalStyles.focusMetricLabel}>This Month</Text>
              </View>
            </View>
            <TouchableOpacity style={GlobalStyles.startFocusButton}>
              <Text style={GlobalStyles.startFocusButtonText}>Start Focus Session</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Upcoming Tasks */}
        <View style={GlobalStyles.sectionContainer}>
          <Text style={GlobalStyles.sectionTitle}>Upcoming Tasks</Text>
          <FlatList
            data={upcomingTasks}
            renderItem={renderTaskItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  )
}
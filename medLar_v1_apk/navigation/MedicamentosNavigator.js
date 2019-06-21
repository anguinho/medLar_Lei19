import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, Button } from "react-native";
import {
    createStackNavigator,
} from "react-navigation";

import Medicamentos from "../screens/Medicamentos";

import Icon from '@expo/vector-icons/Ionicons';
  


const MedicamentosStack = createStackNavigator({
    MedicamentosDashNavigator: Medicamentos
}, {
    defaultNavigationOptions: ({ navigation }) => {
        return {
          title: 'Lista de Medicamentos',
          headerLeft: ( <
            Icon style = {
                { paddingLeft: 10 }
            }
            onPress = {
                () => navigation.openDrawer()
            }
            name = "md-menu"
            size = { 30 }
            />
        )
        };
    }
});



export default MedicamentosStack;
/*
export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack
});*/
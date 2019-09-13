module.exports = [{
   "id": "sdk-ble-swift",
   "name": "Swift XYO BLE SDK",
   "locale": "EN",
   "platform": "iOS",
   "lang": "Swift",
   "type": "SDK",
   "desc": "Generalized Bluetooth Library with additional support for XY and XYO devices",
   "modules": [
     {
       "desc": "Device Specific Client Implementations",
       "name": "devices",
       "objects": [
         {
           "name": "XY4BluetoothDevice",
           "super": "XYFinderDeviceBase",
           "properties": [
             {
              "name": "uuid",
              "type": "UUID(uuidString: XY4BluetoothDevice.uuid)"
             },
             {
              "name": "prefix",
              "type": "XY4BluetoothDevice.prefix"
             },
             {
              "name": "familyName",
              "type": "XY4BluetoothDevice.familyName"
             },
             {
              "name": "id",
              "type": "XY4BluetoothDevice.id"
             }
           ],
           "functions": [
            {
              "subclass": "connectableServices",
              "name": "getServiceUuid",
              "desc": "gets the uuid for a particular service",
              "parameters": [
                {
                  "name": "connectablePowerLevel : ",
                  "type": "UInt8"
                }
              ],
              "returns": [
                {
                  "type": "CBUUID"
                }
              ],
            },
            {
              "name": "subscribeToButtonPress",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "unsubscribeToButtonPress",
              "parameters": [
                {
                  "name": "referenceKey : ",
                  "type": "UUID?"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "find",
              "parameters": [
                {
                  "name": "song : ",
                  "type": "XYFinderSong"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "stayAwake",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "isAwake",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "fallAsleep",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "lock",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "unlock",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "version",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
           ]
         },
         {
           "name": "XYBluetoothDeviceFactory",
           "functions": [
            {
              "name": "addCreator",
              "parameters": [
                {
                  "name": "uuid : ",
                  "type": "String"
                },
                {
                  "name": "creator : ",
                  "type": "XYDeviceCreator"
                }
              ],
              "returns": [],
            },
            {
              "name": "removeCreator",
              "parameters": [
                {
                  "name": "uuid : ",
                  "type": "String"
                },
              ],
              "returns": [],
            },
            {
              "name": "build",
              "parameters": [
                {
                  "name": "from xyId : ",
                  "type": "String"
                },
              ],
              "returns": [],
            },
            {
              "name": "updateDeviceLocations",
              "parameters": [
                {
                  "name": "newLocation : ",
                  "type": "XYLocationCoordinate2D"
                },
              ],
              "returns": [],
            },
            {
              "name": "build",
              "parameters": [
                {
                  "name": "from iBeacon : ",
                  "type": "XYIBeaconDefinition"
                },
                {
                  "name": "rssi : ",
                  "type": "Int = XYDeviceProximity.defaultProximity"
                },
                {
                  "name": "updateRssiAndPower : ",
                  "type": "Bool"
                },
              ],
              "returns": [],
            },
            {
              "name": "build",
              "parameters": [
                {
                  "name": "from family : ",
                  "type": "XYDeviceFamily"
                },
                {
                  "name": "rssi : ",
                  "type": "Int = XYDeviceProximity.defaultProximity"
                },
                {
                  "name": "updateRssiAndPower : ",
                  "type": "Bool"
                },
              ],
              "returns": [],
            },
           ]
         },
         {
           "name": "XYDeviceFamily",
           "properties": [
             {
               "name": "uuid",
               "type": "UUID"
             },
             {
               "name": "prefix",
               "type": "String"
             },
             {
               "name": "familyName",
               "type": "String"
             },
             {
               "name": "id",
               "type": "String"
             },
           ],
           "functions": [
             {
              "name": "enable",
              "parameters": [
                {
                  "name": "enable : ",
                  "type": "Bool"
                }
              ],
              "returns": [],
             },
             {
               "name": "disable",
               "parameters": [],
               "returns": [],
             },
             {
               "name": "allFamilies",
               "parameters": [],
               "returns": [
                 {
                   "type": "[XYDeviceFamily]"
                 }
               ],
             },
             {
               "name": "build",
               "parameters": [
                 {
                   "name": "iBeacon : ",
                   "type": "XYIBeaconDefinition"
                 }
              ],
               "returns": [],
             },
           ],           
         },
         {
           "name": "XYGPSBluetoothDevice",
           "super": "XYFinderDeviceBase",
           "properties": [
              {
               "name": "family",
               "type": "XYDeviceFamily"                
              },
              {
               "name": "id",
               "type": "String"                
              },
              {
               "name": "uuid",
               "type": "String"                
              },
              {
               "name": "familyName",
               "type": "String"                
              },
              {
               "name": "prefix",
               "type": "String"                
              },
              {
               "name": "activated",
               "type": "Bool"                
              },
           ],
           "functions": [
              {
               "name": "init",
               "parameters": [
                 {
                   "name": "id : ",
                   "type": "String"
                 },                 
                 {
                   "name": "iBeacon : ",
                   "type": "XYIBeaconDefinition?"
                 },                 
                 {
                   "name": "rssi : ",
                   "type": "Int = XYDeviceProximity.none.rawValue"
                 },                 
               ],
               "returns": [],
              },
              {
               "name": "subscribeToButtonPress",
               "parameters": [],
               "returns": [],
              },
              {
               "name": "unsubscribeToButtonPress",
               "parameters": [
                 {
                   "name": "for referenceKey : ",
                   "type": "UUID?"
                 },                 
               ],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }
               ],
              },
              {
               "name": "find",
               "parameters": [
                 {
                   "name": "song  : ",
                   "type": "XYFinderSong = .findIt"
                 },                  
               ],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }
               ],
              },
              {
               "name": "version",
               "parameters": [],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }                 
               ],
              },
              {
               "name": "fallAsleep",
               "parameters": [],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }                 
               ],
              },
              {
               "name": "lock",
               "parameters": [],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }                   
               ],
              },
              {
               "name": "unlock",
               "parameters": [],
               "returns": [
                 {
                   "type": "XYBluetoothResult"
                 }                   
               ],
              },
           ],
         },
         {
           "name": "XYIBeaconDefinition",
           "super": "Equatable",
           "properties": [
             {
               "name": "uuid",
               "type": "UUID"
             },            
             {
               "name": "major",
               "type": "UInt16?"
             },            
             {
               "name": "minor",
               "type": "UInt16?"
             },            
             {
               "name": "hasMajor",
               "type": "Bool"
             },            
             {
               "name": "hasMinor",
               "type": "Bool"
             },            
             {
               "name": "toString",
               "type": "String"
             },            
             {
               "name": "powerLevel",
               "desc": "Determines the power value from the minor, changed when a user presses the button on the finder",
               "type": "UInt8"
             },            
           ],
           "functions": [
             {
               "name": "mainMinor",
               "desc": "Filters out the power level to generate a consistent minor value",
               "parameters": [
                 {
                   "name": "for family  : ",
                   "type": "XYDeviceFamily"
                 },  
                 {
                   "name": "slot  : ",
                   "type": "UInt16? = nil"
                 },  
               ],
               "returns": [
                 {
                   "type": "UInt16?"
                 }
               ],
             },
             {
               "name": "xyId",
               "desc": "Builds the beacon definition based on the uuid, major and minor",
               "parameters": [
                 {
                   "name": "from family  : ",
                   "type": "XYDeviceFamily"
                 },   
               ],
               "returns": [
                 {
                   "type": "String"
                 }
               ],
             },
             {
               "name": "beacon",
               "desc": "Builds the beacon definition based on the uuid, major and minor",
               "parameters": [
                 {
                   "name": "from xyID  : ",
                   "type": "String"
                 },   
               ],
               "returns": [
                 {
                   "type": "XYIBeaconDefinition?"
                 }
               ],
             },
             {
               "name": "==",
               "desc": "Checks the beacon definition for range equality",
               "parameters": [
                 {
                   "name": "lhs  : ",
                   "type": "XYIBeaconDefinition"
                 },   
                 {
                   "name": "rhs  : ",
                   "type": "XYIBeaconDefinition"
                 },   
               ],
               "returns": [
                 {
                   "type": "Bool"
                 }
               ],
             },
           ],
         },
         {
           "name": "XYMobileBluetoothDevice",
           "super": "XYFinderDeviceBase",
           "properties": [
             {
              "name": "family",
              "type": "XYDeviceFamily.init()"
             },
             {
              "name": "id",
              "type": "String"
             },             
             {
              "name": "uuid",
              "type": "String"
             },
             {
              "name": "familyName",
              "type": "String = 'Mobile Device'"
             },
             {
              "name": "prefix",
              "type": "String = 'xy:mobiledevice'"
             },
           ],
           "functions": [
            {
              "name": "init",
              "parameters": [
                {
                  "name": "id : ",
                  "type": "String"
                },                 
                {
                  "name": "iBeacon : ",
                  "type": "XYIBeaconDefinition?"
                },                 
                {
                  "name": "rssi : ",
                  "type": "Int = XYDeviceProximity.none.rawValue"
                },                 
              ],
              "returns": [],
            },             
            {
              "name": "find",
              "parameters": [
                {
                  "name": "song : ",
                  "type": "XYFinderSong = .findIt"
                }
              ],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "stayAwake",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "fallAsleep",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "lock",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "unlock",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },
            {
              "name": "version",
              "parameters": [],
              "returns": [
                {
                  "type": "XYBluetoothResult"
                }
              ],
            },            
           ],
         }
       ]
     },
     {
       "desc": "Location coordinate models",
       "name": "models",
       "objects": [
          {
            "name": "XYLocationCoordinate2D",
            "properties": [
              {
                "name": "latitude",
                "type": "Double"
              },
              {
                "name": "longitude",
                "type": "Double"
              },
              {
                "name": "horizontalAccuracy",
                "type": "Double"
              },
              {
                "name": "verticalAccuracy",
                "type": "Double"
              },
              {
                "name": "isValid",
                "type": "Bool"
              },
              {
                "name": "toCoreLocation",
                "type": "CLLocation"
              },
            ],
            "functions": [
              {
                "name": "init",
                "parameters": [
                  {
                    "name": "location : ",
                    "type": "CLLocation"
                  }
                ],
                "returns": [],
              }, 
            ],
          }
       ],
     },
     {
       "desc": "Base BLE protocols and classes",
       "name": "base",
       "objects": [
          {
            "name": "XYBluetoothBase",
            "desc": "Basic protocol for all BLE devices",
            "properties": [
              {
                "name": "rssi",
                "type": "Int"
              },
              {
                "name": "powerLevel",
                "type": "UInt8"
              },
              {
                "name": "name",
                "type": "String"
              },
              {
                "name": "lastPulseTime",
                "type": "Date"
              },
              {
                "name": "proximity",
                "type": "XYDeviceProximity"
              },
              {
                "name": "rssiRange",
                "type": "Int"
              },
            ],
            "functions": [
              {
                "name": "init",
                "parameters": [
                  {
                    "name": "location : ",
                    "type": "CLLocation"
                  }
                ],
                "returns": [],
              }, 
            ],
          },
          {
            "name": "XYBluetoothDevice",
            "desc": "A generic BLE device",
            "properties": [
              {
                "name": "family",
                "type": "XYDeviceFamily"
              },
              {
                "name": "iBeacon",
                "type": "XYIBeaconDefinition"
              },
              {
                "name": "peripheral",
                "type": "CBPeripheral"
              },
              {
                "name": "inRange",
                "type": "Bool"
              },
              {
                "name": "connected",
                "type": "Bool"
              },
              {
                "name": "markedForDeletion",
                "type": "Bool"
              },              
              {
                "name": "isUpdatingFirmware",
                "type": "Bool"
              },              
            ],
            "functions": [
              {
                "name": "connect",
                "parameters": [],
                "returns": [],
              },               
              {
                "name": "disconnect",
                "parameters": [],
                "returns": [],
              },               
              {
                "name": "stayConnected",
                "parameters": [
                  {
                    "name": "value : ",
                    "type": "Bool"
                  }                  
                ],
                "returns": [],
              },               
              {
                "name": "updatingFirmware",
                "parameters": [
                  {
                    "name": "value : ",
                    "type": "Bool"
                  }                  
                ],
                "returns": [],
              },               
              {
                "name": "verifyExit",
                "parameters": [
                  {
                    "name": "callback : ",
                    "type": "Bool"
                  }                  
                ],
                "returns": [],
              },               
              {
                "name": "get",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "timeout : ",
                    "type": "DispatchTimeInterval"
                  }                  
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "set",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "value : ",
                    "type": "XYBluetoothResult"
                  },                  
                  {
                    "name": "timeout : ",
                    "type": "DispatchTimeInterval"
                  }                  
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "subscribe",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "delegate : ",
                    "type": "(key: String, delegate: XYBluetoothDeviceNotifyDelegate)"
                  },                                   
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "unsubscribe",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "subscribe",
                "parameters": [
                  {
                    "name": "delegate : ",
                    "type": "CBPeripheralDelegate"
                  },                  
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [],
              },               
              {
                "name": "unsubscribe",
                "parameters": [                
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [],
              },               
              {
                "name": "attachPeripheral",
                "parameters": [                
                  {
                    "name": "peripheral : ",
                    "type": "XYPeripheral"
                  },                                
                ],
                "returns": [
                  {
                    "type": "Bool"
                  }
                ],
              },               
              {
                "name": "detachPeripheral",
                "parameters": [],
                "returns": [],
              },               
              {
                "name": "detected",
                "parameters": [],
                "returns": [],
              },               
            ],
          },
          {
            "name": "XYBluetoothDeviceBase",
            "desc": "A concrete base class to base any BLE device off of",
            "properties": [
              {
                "name": "name"
              },
              {
                "name": "id"
              },
              {
                "name": "deviceBleQueue"
              },
              {
                "name": "family"
              },
              {
                "name": "iBeacon"
              },
              {
                "name": "rssi"
              },
              {
                "name": "powerLevel"
              },
              {
                "name": "firstPulseTime"
              },
              {
                "name": "lastPulseTime"
              },
              {
                "name": "lastMonitoredTime"
              },
            ],
            "functions": [
              {
                "name": "detected",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "update",
                "parameters": [
                  {
                    "name": "rssi",
                    "type": "Int"
                  },
                  {
                    "name": "powerLevel",
                    "type": "UInt8"
                  },
                ],
                "returns": [],
              },
              {
                "name": "resetRssi",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "verifyExit",
                "parameters": [
                  {
                    "name": "callback",
                    "type": "Bool",
                  }
                ],
                "returns": [],
              },
              {
                "name": "subscribe",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "delegate : ",
                    "type": "(key: String, delegate: XYBluetoothDeviceNotifyDelegate)"
                  },                                   
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "unsubscribe",
                "parameters": [
                  {
                    "name": "serivceCharacteristic : ",
                    "type": "XYServiceCharacteristic"
                  },                  
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },               
              {
                "name": "subscribe",
                "parameters": [
                  {
                    "name": "delegate : ",
                    "type": "CBPeripheralDelegate"
                  },                  
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [],
              },               
              {
                "name": "unsubscribe",
                "parameters": [                
                  {
                    "name": "key : ",
                    "type": "String"
                  },                                
                ],
                "returns": [],
              },               
              {
                "name": "attachPeripheral",
                "parameters": [                
                  {
                    "name": "peripheral : ",
                    "type": "XYPeripheral"
                  },                                
                ],
                "returns": [
                  {
                    "type": "Bool"
                  }
                ],
              },               
              {
                "name": "detachPeripheral",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "connect",
                "parameters": [],
                "returns": [],
              },               
              {
                "name": "disconnect",
                "parameters": [],
                "returns": [],
              },               
              {
                "name": "stayConnected",
                "parameters": [
                  {
                    "name": "value : ",
                    "type": "Bool"
                  }                  
                ],
                "returns": [],
              },               
              {
                "name": "updatingFirmware",
                "parameters": [
                  {
                    "name": "value : ",
                    "type": "Bool"
                  }                  
                ],
                "returns": [],
              },                             
            ],
          },
          {
            "name": "XYBluetoothResult",
            "desc": "Represents the result from any get/set request made via a GattRequest",
            "properties": [],
            "functions": [
              {
                "name": "asString",
                "returns": [
                  {
                  "type": "String"
                  }
                ],
              },
              {
                "name": "asInteger",
                "returns": [
                  {
                  "type": "Int"
                  }
                ],          
              },
              {
                "name": "asByteArray",
                "returns": [
                  {
                  "type": "Array"
                  }
                ],
              },
            ],
          },
          {
            "name": "XYFinderDevice",
            "desc": "A device from the XY family, has an iBeacon and other XY-specific identifiers",
            "super": "XYBluetoothDevice",
            "properties": [
              {
                "name": "connectableServices",
                "type": "[CBUUID]"
              },
              {
                "name": "location",
                "type": "XYLocationCoordinate2D"
              },
              {
                "name": "batteryLevel",
                "type": "Int"
              },
              {
                "name": "firmware",
                "type": "String"
              },
              {
                "name": "isRegistered",
                "type": "Bool"
              },
            ],
            "functions": [
              {
                "name": "subscribeToButtonPress",
                "desc": "Handler for button press subscribe",
                "returns": [
                  {
                  "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "unsubscribeToButtonPress",
                "desc": "Handler for button press unsubscribe",
                "parameters": [
                  {
                    "name": "referenceKey",
                    "type": "UUID"
                  }
                ],
                "returns": [
                  {
                  "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "updateLocation",
                "desc": "Handle location updates",
                "parameters": [
                  {
                    "name": "newLocation",
                    "type": "XYLocationCoordinate2D"
                  }
                ],
                "returns": [],
              },
              {
                "name": "updateBatteryLevel",
                "desc": "Updates to battery level",
                "parameters": [
                  {
                    "name": "newLevel",
                    "type": "Int"
                  }
                ],
                "returns": [],
              },
              {
                "name": "getRegistrationFlag",
                "desc": "Updates the state of the device's isRegistered flag",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "startMonitorTimer",
                "desc": "",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "cancelMonitorTimer",
                "desc": "",
                "parameters": [],
                "returns": [],
              },
              {
                "name": "find",
                "desc": "",
                "parameters": [
                  {
                    "name": "song",
                    "type": "XYFinderSong"
                  }
                ],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "stayAwake",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "isAwake",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "fallAsleep",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "lock",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "unlock",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
              {
                "name": "version",
                "desc": "",
                "parameters": [],
                "returns": [
                  {
                    "type": "XYBluetoothResult"
                  }
                ],
              },
            ],
          },
          {
            "name": "XYFinderDeviceBase",
            "desc": "The base XYFinder class",
            "super": "XYBluetoothDeviceBase,  XYFinderDevice",
            "properties": [],
            "functions": [],
          },         
       ],
     },
     {
       "desc": "Base device creators",
       "name": "creators",
       "objects": [

       ],
     },
     {
       "desc": "Gatt Primitives",
       "name": "gatt",
       "objects": [

       ],
     },
   ]
}]
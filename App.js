import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import Task from "./components/task";
import { db }  from './components/config';
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 


export default function App() {
  
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    const collectionRef = collection(db, "tasks");

    addDoc(collectionRef, {
      task: task,
    }).then(() => {
      console.log("datasubmitted!");

    }).catch((error) => {
      console.log(error);
    });;

    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);


  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}> Today's Tasks</Text> 
          

          <View style={styles.items}>
          
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                
                <Task task={item}></Task>

              </TouchableOpacity>
            )
          })

          }
          </View>

      
      </View>
        
      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
       style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder="Write your task here..." value={task} onChangeText={task => setTask(task)}></TextInput>


          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCCEBF',
    padding: 20
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
     

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 50

  },
  items: {
    marginBottom: 15

  },

  tasksWrapper: {
    
  },

  input: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    width: 275,
    height: 55,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 15
    
  },

  addWrapper: {
    borderColor: '#708090',
    width: 45,
    height: 45,
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 60,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },

  addText: {
    paddingVertical: 4,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#708090'
    
  },

  icon: {
    height: 25,
    width: 25,

  },

  square: {
    width: 24,
        height: 24,
        backgroundColor: '#BFCDDC',
        borderRadius: 7,
        marginRight: 10
  }

})

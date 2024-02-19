import React, { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBarHeader from "./SideBarHeader";
import { Box } from "@mui/material";
import Screen from "./Screen";
import ChatSection from "./ChatSection/ChatSection";
import SideBar from "./SideBar/SideBar";
import { useSelector,useDispatch } from "react-redux";
import {setPeople} from "./Slices/peopleSlice";
import { useEffect } from "react";
// import { setSelectedPerson } from "./Slices/selctedPersonSlice";
// import ChatSection from "./ChatSection/MesssageSection";


const Main = () => {
  

  // const [people, setPeople] = useState([
  //   { contactNumber: 1111111111, name: "Ashutosh", messages: ["Hii! ", "How Are You"],time:"2.00pm" },
  //   { contactNumber: 2222222222, name: "Ketan Rathor", messages: ["Hello! ", "How Are You"],time:"2.00pm"},
  //   { contactNumber: 3333333333, name: "Arpit", messages: ["Bye! "],time:"2.00pm" },
  //   { contactNumber: 4444444444, name: "Sourabh", messages: ["cjkansckjna! ", "How Are You"] ,time:"2.00pm"},
  //   { contactNumber: 5555555555, name: "Mihir", messages: ["akjskjhas! ", "How Are You"],time:"2.00pm" },
  //   { contactNumber: 6666666666, name: "Abhishek", messages: ["asdjk! ", "How Are You"] ,time:"2.00pm"},
  //   { contactNumber: 7777777777, name: "Abhinandan", messages: ["aslkckla! ", "How Are You"] ,time:"2.00pm"},
  //   { contactNumber: 8888888888, name: "Pragya", messages: ["akscnnac! ", "How Are You"],time:"2.00pm" }
  //   // Add more people as needed
  // ]);

  const people = useSelector((state) => state.people)

  const [selectedPerson, setSelectedPerson] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPeople())
   }, [])


  // const theme = useTheme();
  // const smUp = useMediaQuery(theme.breakpoints.down('sm'));

  // console.log("smUp", smUp)


  // const [sentText,setSentText] = useState("")


  function handlePersonClick(person) {
    console.log("ghghjghj",person)
    setSelectedPerson(person);
    console.log("ssss",person);
  };

  // function SendMessage(text){
  //   console.log(people);
  //   let clonePeople = JSON.parse(JSON.stringify(people)) 
  //   console.log("clonePeoplae", clonePeople)
  //   console.log("selectedPerson.messages",selectedPerson.messages);
  //   let msgArr=[...selectedPerson.messages]
  //   console.log("msgArr", msgArr)
  //   msgArr.push(text)
  //   let index=clonePeople.findIndex(user=>user.contactNumber===selectedPerson.contactNumber)
  //   clonePeople[index].messages = msgArr
  //   console.log("clonePeople", clonePeople)
  //   // setPeople(clonePeople);
  //   dispatch(setPeople(clonePeople))
  //   // setSelectedPerson({...clonePeople[index]})

  // }

  return (

    <Box sx={{ display: "flex",overflowY:"hidden", flexDirection: "row",overflowX:'hidden' }}>
      {/* <SideBarHeader
      people ={people}
      setPeople={setPeople}
      onPersonClick={handlePersonClick} /> */}
      
      <SideBar
      // people={people}
      handlePersonClick ={handlePersonClick}
      selectedPerson = {selectedPerson}
      />
      
      
      {selectedPerson ? 
      <ChatSection 
      // people={people}
      selectedPerson = {selectedPerson}
      setSelectedPerson ={setSelectedPerson}
      // SendMessage= {SendMessage}
      /> : <Screen
      selectedPerson = {selectedPerson}
      
      />}
      
      
      
    </Box>
  );
};
export default Main;

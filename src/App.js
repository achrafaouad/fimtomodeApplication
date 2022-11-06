import logo from "./logo.svg";
import "./App.css";
import particlesConfig from "./assets/particlesConfig.json";
import Particle from "react-particles-js";
import React, { Component } from "react";
import { useEffect, useState } from "react";

function App() {
  // const [selectedFile, setSelectedFile] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [coordsFinal, setCoordsFinal] = useState({ x: 0, y: 0 });
  const [coordsFinal2, setCoordsFinal2] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [imageLink, setImageLink] = useState("");
  const [size, setSize] = useState("");
  const [html, sethtml] = useState("");
  const [i, setindex] = useState(0);
  const [exported, setExported] = useState("");
  const [font, setFont] = useState("");
  const [fsize, setFsize] = useState("");
  const [color, setcolor] = useState("");
  const [fsize2, setFsize2] = useState("");
  const [color2, setcolor2] = useState("");

  useEffect(() => {
    
    

  }, [exported]);

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };
  const handleMouseMovechoice = (event) => {
    i === 0 ? setindex(1) : setindex(0);
    
    if (i === 0) {
      setCoordsFinal({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
      });
    } else {
      setCoordsFinal2({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
      });
    }
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageLink(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onwidthChange = (event) => {
    
    setSize({ ...size, width: event.target.value + "px" });
  };

  const change = (event) => {};
  const onFontChange = (event) => {
    
    setFont(event.target.value);
  };
  const onsizeChange = (event) => {
    
    setFsize(event.target.value);
  };
  const onColorChange = (event) => {
    
    setcolor(event.target.value);
  };
  const onsizeChange2 = (event) => {
    
    setFsize2(event.target.value);
  };
  const onColorChange2 = (event) => {
    
    setcolor2(event.target.value);
  };

  // wewrtyuikjgdfsa
  const [file, setFile] = useState();
  const [inputs, setinputs] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    csvRows.unshift(csvHeader[0]);
    setinputs(string);
    // 
    for (let i = 0; i < csvRows.length; i++) {
      csvRows[i] = csvRows[i].split(".");
    }
    for (let i = 0; i < csvRows.length; i++) {
      csvRows[i].pop();
    }

    for (let i = 0; i < csvRows.length; i++) {
      
      if (csvRows[i].length < 1 || !csvRows[i][0]) {
       
       //console.warn(csvRows[i])
       //console.warn(i)
        csvRows.splice(i, 1);
     }

      
    }
   
    if(csvRows[csvRows.length-1].length == 0){
      //console.log("achraf")
      csvRows.pop();
    }

   
    
    // 
    ////

    station = "";
    var files = [];
    var params = [];
    var initBlock = [];
    var size = 0;
    var result = [];

    setExported("");
    // for (let i = 0; i < csvRows.length; i++) {
      
    //   if (csvRows[i].length <= 1 || csvRows[i][0]== "\r") {
    //      csvRows.splice(i, 1);
    //   }
    // }

    
    var files = csvRows;
    var station = files[0][0];
    
    let pm = 0;
    let ss = "";

    while (pm < 8 - station.length) {
      
      ss = ss + "0";
      pm = pm + 1;
    }
    var stationat = ss + station;
    
    size = files.length;
    
    let i = 1;

    while (files[i][0] != station) {
      
      initBlock.push(files[i]);
      i = i + 1;
    }
  //console.log("i ",i)
  

    var pasvar = 0;
    
    
    for (const x of initBlock) {

      // 
      
      if (x[0].length == 4) params.push(x[0]);
    }
    
    //console.log(initBlock)
    
    
    

    let r = 0;
    for (const x of initBlock) {
      if (x[0].length == 4) {
        //console.error(x[0])
        params.push(x[0]);
        //console.log("params ",params)
        pasvar = r;
        break;
      }
      r = r + 1;
    }
    //console.log("pasvar 1",pasvar)
    //console.log("nbrvariable 1",nbrvariable)
    //console.log("params 1",params)
    var variables = new Set(params);
    //console.log(variables);
    var nombre_variables = variables.size;
    //console.log(nombre_variables);
    //hnaya
    // //console.log(csvRows)



    var nbrVoie = 0;
    for(let i = 0;i<csvRows.length;i=i+pasvar+1){
      nbrVoie = nbrVoie <Number(csvRows[i][2])?Number(csvRows[i][2]):nbrVoie;
    }

    //console.log(nbrVoie)
    //hnaya


    var pas = i;
    var numberofvar = params.length - 1;

    //console.warn(files[1]);
    var Nhours = files[0].length;
    var index1 = 0;
    for (const x of files[1]) {
      if (x.length > 0) {
        index1 = index1 + 1;
        
      }
    }
    var index2 = 0;
    for (const x of files[2]) {
      if (x.length > 0) {
        index2 = index2 + 1;
      }
    }
    var j = 0;
    var k = 0;
    var prevVoie = 0;
    var voie = 0;
    var hours = files[0][10];
    
   
    while (j < size) {
      
      while (k < (i + j)) {
        if (Number(files[j][2]) >= prevVoie) {
          
          voie = Number(files[j][2]);
          
          // 
          
        }

        prevVoie = Number(files[j][2]);
        k = k + 1;
      }
      j = j + i;
    }
    

    setExported(
      `"v4.26","        ","        ","${stationat}","${files[0][7].trim() +
        "/" +
        files[0][6].trim() +
        "/" +
        files[0][5].trim()}","${files[0][8].trim()}:00"`
    );

    setExported(
      (t) =>
        t +
        `\n"   ","        ","     ","${Number(
          Number(files[0][10]) / 60
        )} ","01:00"`
    );
    
    setExported(
      (t) =>
        t +
        `\n"0${nbrVoie}","29","${(nombre_variables + 1) *voie}","......","......"`
    );
    
    //console.error("nbrVoie +1:" + (nbrVoie + 1) + "voie : " + voie);

    setExported(
      (t) =>
        t +
        `\n"                                                                 "`
    );
    setExported(
      (t) =>
        t +
        `\n"                                                                 "`
    );
    setExported(
      (t) =>
        t +
        `\n"0505080184A08401830283038304A001C4354169FFA001D420202078302E316D20202078302E316D20202078302E316D20202078302E316D28030101F4041A028A020800C8"`
    );
    setExported(
      (t) =>
        t +
        `\n"                       ","Generated by INFRASOLUTIONS          "`
    );
    setExported(
      (t) => t + `\n"                       ","V100 from AVCL           "`
    );
    setExported(
      (t) =>
        t + `\n"                       ","                              "`
    );
    setExported(
      (t) =>
        t + `\n"                       ","                              " `
    );
    setExported(
      (t) =>
        t + `\n"                       ","                              "`
    );
    setExported(
      (t) =>
        t + `\n"                       ","                              " `
    );

     j = 0;
     k = 0;
    var array = [];
    let dd = ""
    // 
    // 

    while (j < size) {
      var element = [];
      while (k < i + j) {

   
        if (files[k][0] == station) {
          k = k + 1;
        } else {
          element.push(files[k]);
          k = k + 1;
        }
      }
      array.push(element);
      element = [];
      j = j + i;
    }
    let m=[]
    var s=[]
    
    
    for (var l= 0;l< voie ;l++){
      
      for (var v= 0;v< pas ;v = v+(pasvar+1) ){
        s.push(array[l][v])
        
        
      }
                  
           m.push(s)
           s=[]
    }
    
    
    var lents = m.length
    let line = ""
    var   pichichi = ""
    var   prprp = 0

    for (let j= 0;j< m[0][0].length ;j++){
      prprp = 0
      for (let s = 0;s < m.length ;s++){
        for (let k = 0;k < m[s].length ;k++){

         

          if(k!==0){
            dd = m[s][k][j];
            while(dd.length>4){
              if((dd.length)>4){
                      
                dd = dd.slice(1);
                // //console.error(dd);
              }
            }

            prprp = prprp + Number(dd)

            pichichi = pichichi +dd+',' 
          }
                    
            

        }

        var complete = (prprp.toString()).length
        var zeros=""
        
        
          for(let trim = 0;trim < (4-((prprp.toString()).length)) ;trim++){
            zeros = zeros + "0"
          }
        
                
              line = zeros + (prprp.toString()) + ',' + pichichi
              
              
              prprp = 0
              let dede = "\n" + line
              
              setExported(
                (t) =>
                  t + dede
              );

               
              line = ''
              pichichi = ''

      }
    }



    // edit from here


    let nbrvariable = 2
    let vp = 1;
    if (pasvar >= 2){
      while(nbrvariable < pasvar){
        j = 0;
     k = 0;
    var array = [];

    while (j < size) {
      var element = [];
      while (k < i + j) {
        if (files[k][0] == station) {
          k = k + 1;
        } else {
          element.push(files[k]);
          k = k + 1;
        }
      }
      array.push(element);
      element = [];
      j = j + i;
    }
    let m=[]
    var s=[]
    
    
    for (var l= 0;l< voie ;l++){
      
      for (var v= vp;v< pas ;v = v+(pasvar+1) ){
        s.push(array[l][v])
        
        
      }
                  
           m.push(s)
           s=[]
    }
    
    
    var lents = m.length
    let line = ""
    var   pichichi = ""
    var   prprp = 0

    for (let j= 0;j< m[0][0].length ;j++){
      prprp = 0
      for (let s = 0;s < m.length ;s++){
        for (let k = 0;k < m[s].length ;k++){

          // if((m[s][k][j].length)>4){
          //   m[s][k][j] = m[s][k][j].substring(1);
            
          // }
          // if((m[s][k][j].length)>4){
          //   m[s][k][j] = m[s][k][j].substring(1);
            
          // }
          
          if(k!==0){
            dd = m[s][k][j];
              while(dd.length>4){
                if((dd.length)>4){
                        
                  dd = dd.slice(1);
                  //console.error(dd);
                }
              }
            
            
            
            prprp = prprp + Number(dd)
            //console.warn(m[s][k][j])
            pichichi = pichichi +dd+',' 
          }

        }

        var complete = (prprp.toString()).length
        var zeros=""
        for(let trim = 0;trim < (4-((prprp.toString()).length)) ;trim++){
          zeros = zeros + "0"
        }
        
                
              line = zeros + (prprp.toString()) + ',' + pichichi
              //console.log(line)
              
              prprp = 0
              let dede = "\n" + line
              
              setExported(
                (t) =>
                  t + dede
              );

               
              line = ''
              pichichi = ''

      }
    }

    nbrvariable = nbrvariable + 1
    vp = vp + 1

      }
    }

    let end = "\n" + "xxxx"
    setExported(
      (t) =>
        t + end
    );

    






           




  };

  // const affect = (line)=> {
  //   
  //   
  //   setExported( exp + line )
  // }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function(event) {
        const csvOutput = event.target.result;
        
        csvFileToArray(csvOutput);
      };

      fileReader.readAsText(file);
    }
  };


  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const element2 = document.getElementById("val2").value;
    const file = new Blob([element2], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.MOD";
    document.body.appendChild(element);
    element.click();
  };
  

  return (
    
    <>
      <Particle params={particlesConfig} className="App-particles__container" />

      <div className="App">
        <p className="title">FIM TO MODE APPLICATION</p>

      
        <div style={{ textAlign: "center" }}>
        <p className="title2" >Importer fichier FIM</p>
          <form>
            <input
            className="button"
              type={"file"}
              id={"csvFileInput"}
              accept={".FIM"}
              onChange={handleOnChange}
              name="choose"
            />
           <button
          
          className="button btn2"
              onClick={(e) => {
                handleOnSubmit(e);
              }}
            >
              Convertir
            </button>
            
          </form>
        </div>
        <div className=" grid text-center">
          <div className="g-col-6">
            <p className="title2" >FIM</p>
            <textarea
              class="areaQuery"
              id="val1"
              type="text"
              rows="10"
              value={inputs}
              onChange={change}
            >
              {" "}
            </textarea>
          </div>
          
          <div className="g-col-6">
            <p className="title2">MOD</p>
            <textarea
              class="areaQuery"
              id="val2"
              type="text"
              rows="10"
              value={exported}
              onChange={change}
            >
              {" "}
            </textarea>
          </div>
        </div>
       
        <div>
          <button className="button" onClick={downloadTxtFile}>Sauvegarder le fichier</button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;

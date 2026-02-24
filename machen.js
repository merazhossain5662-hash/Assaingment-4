let total = 8;
let interviewC=0;
let rejectedC=0;
let jobC=8;
let inter=0;
let reject3=0;
let jobC2=8;
let jobC3=8;

let offerStatus={
"rth-1":"all",
"rth-2":"all",
"rth-3":"all",
"rth-4":"all",
"rth-5":"all",
"rth-6":"all",
"rth-7":"all",
"rth-8":"all",

};

function count(){
  document.getElementById("total-count").innerText=  total;
  document.getElementById("job-count").innerText=  jobC;
  document.getElementById("interview-count").innerText=   interviewC;
  document.getElementById("rejected-count").innerText=  rejectedC; 
  document.getElementById("reject").innerText= reject3; 
  document.getElementById("inter").innerText= inter; 
  document.getElementById("job-count-2").innerText=  jobC2; 
  document.getElementById("job-count-3").innerText=  jobC3; 
}

function hide(id){
  const all = document.getElementById("offers");
  const interVew = document.getElementById("interviw");
  const reject = document.getElementById("rejacted");

  all.classList.add("hidden");
  interVew.classList.add("hidden");
  reject.classList.add("hidden");

  const selected=document.getElementById(id);
  selected.classList.remove("hidden");
}

function remove(id){
if(offerStatus==="interview"){
  interviewC--;
  interviewC--;
}else if(offerStatus==="rejected"){
  rejectedC--;
  rejectedC--;
}else if(offerStatus==="all"){
  total--;
}
 offerStatus[id]="deleted";
 const selected = document.getElementById(id);
   selected.classList.add("hidden");
    
   total--;
   jobC--;
   jobC2--;
   jobC3--;
   count();
}


function badge(id){
const selected = document.getElementById(id);
selected.classList.remove("btn-primary");

selected.classList.add("badge-error");
selected.classList.remove("badge-success");
selected.innerText= "REJACTED"
}

function gBadge(id){
const selected = document.getElementById(id);
selected.classList.remove("badge-primary");
selected.classList.remove("badge-error");
selected.classList.add("badge-success");
selected.innerText= "INTERVIEW"
}

function reject(id){
  const selected = document.getElementById(id);
  selected.classList.add("rejacte-boder")
   selected.classList.remove("inter-boder");
}
function interview(id){
  const selected = document.getElementById(id);
  selected.classList.add("inter-boder");
   selected.classList.remove("rejacte-boder")
}


function add1(id){

if(offerStatus[id] ==="rejected") return;

if(offerStatus[id] ==="interview"){
 interviewC--;
 inter--;
}
rejectedC++;
 reject3++; 
offerStatus[id]="rejected";

let file=document.getElementById("file-1");
const rjFile = document.getElementById("rejacted");
const old=document.getElementById(id);
// const newFile=document.createElement("div")
file.classList.add("hidden");
// newFile.innerHTML=old;
rjFile.append(old);

count();
}


function add2(id){
if(offerStatus[id] ==="interview") return;

if(offerStatus[id] ==="rejected"){
 rejectedC--;
  reject3--; 
}
interviewC++;
inter++;
offerStatus[id]="interview";
let file=document.getElementById("file-2");
const inFile = document.getElementById("interviw");
const old=document.getElementById(id);
// const newFile=document.createElement("div")
file.classList.add("hidden");
// newFile.innerHTML=old;
inFile.appendChild(old);

 count(); 
}




let openAll = document.getElementById("btn1");
let Portals = document.getElementById("btn2");
let Sheets = document.getElementById("btn3");
let AI = document.getElementById("btn4");


let links = [
// {url:"https://teams.microsoft.com/", target:"_blank", category: "Portals"},
// {url:"https://10fastfingers.com/typing-test/english", target:"_blank", category: "Portals"},
{url:"https://expert.chegg.com/qna/authoring", target:"_blank", category: "Portals"},
{url:"https://app.hcmengine.com/FocusEmployeeConnect/Login.aspx?ReturnUrl=%2fFocusEmployeeConnect%2fHeaderMenuNew.aspx", target:"_blank", category: "Portals"},
{url:"https://portal.fevtutor.com/", target:"_blank", category: "Portals"},
{url:"https://mail.google.com/mail/u/0/#inbox", target:"_blank", category: "Documents"},
{url:"https://teams.microsoft.com/", target:"_blank", category: "Documents"},
{url:"https://outlook.office.com/mail/", target:"_blank", category: "Documents"},
{url:"https://docs.google.com/spreadsheets/d/1SCeALZFMVuaGrzDJrdb2IKttZLjyNWweqM1JB_zDsgI/edit#gid=726450013", target:"_blank", category: "Documents"},
{url:"https://docs.google.com/spreadsheets/d/1NoJcYTkdqjCFdfhgr0GVJ674ywEmBuymMYQBtW_t0do/edit#gid=919540150", target:"_blank", category: "Documents"},
{url:"https://nocfocusedumatics-my.sharepoint.com/:x:/g/personal/sedhu_v_focusedumatics_com/EThePEZInQ5Lq-W6jg2_xHsBoysjFf7ZnIWKQg-EYNNKTg?rtime=GSbDSR4E3Eg", target:"_blank", category: "Documents"},
{url:"https://docs.google.com/spreadsheets/d/1g5tZ1hAEVqsItXVPjrG0RBFBpajfvY5I_3Gb7gg_aJg/edit?pli=1#gid=0", target:"_blank", category: "Documents"},
{url:"https://chat.openai.com/", target:"_blank", category: "Documents"},
{url:"https://chat.openai.com/", target:"_blank", category: "Documents"},

{url:"https://chat.openai.com/", target:"_blank", category: "AI"},
{url:"https://chat.openai.com/", target:"_blank", category: "AI"},
{url:"https://poe.com/", target:"_blank", category: "AI"},
// {url:"https://www.perplexity.ai/", target:"_blank", category: "AI"},
{url:"https://bard.google.com/", target:"_blank", category: "AI"},
{url:"https://you.com/", target:"_blank", category: "AI"}
];




openAll.addEventListener("click",function(){
links.forEach(function(link){
  window.open(link.url,"_blank")
})
});

Portals.addEventListener("click",function(){
links.forEach(function(link){
  if(link.category === "Portals"){
  window.open(link.url,"_blank")}
})
});

Sheets.addEventListener("click",function(){
links.forEach(function(link){
  if(link.category === "Documents"){
  window.open(link.url,"_blank")}
})
});

AI.addEventListener("click",function(){
links.forEach(function(link){
  if(link.category === "AI"){
  window.open(link.url,"_blank")}
})
});




function updateTime() {
  // Get the current time in India
  var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  document.getElementById('india-time').textContent = indiaTime;

  // Get the current time in USA (Eastern Time Zone)
  var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  document.getElementById('usa-time').textContent = usaTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();

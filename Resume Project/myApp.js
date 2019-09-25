var inputDemanded = {
    column1: {
        name: "Profile",
        h1: "M Shahzaib Shoaib",
        text: "Hello World, I'm M Shahzaib Shoaib | <a href=" + '"#">FRONT-END DEVELOPER</a> | <a href="#">UI/UX DESIGNER</a> | creating awesome and effective visual identities for companies of all sizes around the globe.  I enjoy working in the industry and have a passion for creating and discovering new and effective digital experiences. I took first step in IT industry before two years and studied latest technology. I spend my most of the time, practically every day, experimenting with HTML, CSS ; dabbling   href="#">JavaScript</a> and <a href="#">React</a>; and inhaling a wide variety of potentially useless information through a few hundred feeds. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do   to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. Here are some of my biggest achivements ',
        expriance: "2.5",
        text2: "Years of experience in Web Design",
        text3: "born and raised in Karachi, Pakistan."},
    column2: {
        name: "Education",
        text: "A slight clarification of the above: I’m actually a commerce student cleverly disguised as a successful web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while reading Susan Grant, I’ve focused my        energies on the web, which happily has proven itself to be a wonderful decision. ",
        year1: "2004-2012",
        text2: "I received a great primary education at one of the best private schools on Army Public School. ",
        year2: "2012-2017",
        text3: " I attended the same school for my o'levels in which currently I'm in.",
        year3: "2015(mid)-2017",
        text4: "During high school, I attended an IT insitite, from there I begin my career in web developing. ",
        year4: "Future(living in dream)",
        text5: "Everyone plans for his future as like I also have,I will be a master in  programming and will owned hundreds of software houses. I will also be going to Haward university for my graduation.And lastly joining politics for improving economy of my home country. "     },
    column3: {
        name: "Portfolio",
        text: "I have made some of these projects.",
        h21: "Quiz App",
        text2: "This ia a simple quiz app which was my first semister project, design to check a person's IQ level.",
        h22: "Todo App",
        text3: "A simple data rendering app, which is mostly required by all insitutes",
        h24: "Bazooka",
        text4: "Bazooka is a webapp which is under construction. It is a type of e-commerce website which will beat Amazaon and Ali baba."},
    column4: {
        name: "Skills",
        text: "I'm skilled in these latest technologies and also learning others.",
        ele1: "HTML5",
        per1: "95%",
        ele2: "CSS3",
        per2: "92%",
        ele3: "JavaScript",
        per3: "85%",
        ele4: "Bootstrap",
        per4: "70%",
        ele5: "React",
        per5: "30%",
        ele6: "Photoshop",
        per6: "55%" }
}


var increaser = 0;
function changer(id, display) {
    document.getElementById(id).innerHTML = display;
    increaser++;
}





var column1Ids = ["column1", "h1-profile", "p-profile", "ex", "text-profile2", "text1-profile2"];
var column2Ids = ["column2", "text-colimn2", "year1", "text2-column2", "year2", "text3-column2", "year3", "text4-column2", "year4", "text5-column2",];
var column3Ids = ["column3", "text-column3", "h21-column3", "text2-column3", "h22-column3", "text3-column3", "h23-column3", "text4-column3"];
var column4Ids = ["column4", "text-column4", "ele1-column4", "head1-column4", "ele2-column4", "head2-column4", "ele3-column4", "head3-column4", "ele4-column4", "head4-column4", "ele5-column4", "head5-column4", "ele6-column4", "head6-column4"];



//changer column 1
for (var key in inputDemanded.column1) {
        // console.log(key);
        // console.log("Key is " + key + ", value is" + inputDemanded.column1[key]);
        var id = column1Ids[increaser];
        var value = inputDemanded.column1[key];
        changer(id, value);
        if (increaser === column1Ids.length) {
            increaser = 0;
        }
}
//changer column 2
for (var key in inputDemanded.column2) {
        var id = column2Ids[increaser];
        var value = inputDemanded.column2[key];
        changer(id, value);
        if (increaser === column2Ids.length) {
            increaser = 0;
        }
}
//changer column 3
for (var key in inputDemanded.column3) {
        var id = column3Ids[increaser];
        var value = inputDemanded.column3[key];
        changer(id, value);
        if (increaser === column3Ids.length) {
            increaser = 0;
        }
}
//changer column 4
for (var key in inputDemanded.column4) {
        var id = column4Ids[increaser];
        var value = inputDemanded.column4[key];
        changer(id, value);
        if (increaser === column4Ids.length) {
            increaser = 0;
        }
}


changer("design", 'Designed by <a href="#">Bazooka.co</a>');




// for (var key in inputDemanded.column1) {
//         console.log("obj" + key);
// }
// for (var i = 0; i < column1Ids.length; i++) {
//         console.log("for" + i);
          
// }








console.log(inputDemanded.column1)
const toastLive = document.getElementById('commonToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
var emailArray=[];
var passwordArray=[];
let container = $("#eventDetails");
let storeEventId; 
let eventMainid;
let newData;
let events = [
    {"id":"1", "title":"Brazil Carnival","location":"Surat, Gujarat", "imagepath": "images/event.jpg", "date": "February 01,2024", "Time": "12:00 PM" ,"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {"id":"2","title":"columbia conference","location":"columbia , Africa", "imagepath": "images/event-1.jpg", "date": "February 01,2024", "Time": "12:00 PM" ,"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {"id":"3","title":"super nova watch","location":"Los Angeles , America", "imagepath": "images/event-2.jpg", "date": "February 01,2024", "Time": "12:00 PM" ,"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
]


document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('loader').style.display="none";
        },1500);
    }
}

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('#header').addClass('fixed-header');
    }
    else {
        $('#header').removeClass('fixed-header');
    }
});

function register(){
    event.preventDefault();

    var fname = document.getElementById("rFname").value;
    var lname = document.getElementById("rLname").value;
    var email = document.getElementById("rEmail").value;
    var password = document.getElementById("rPassword").value;
    var passwordRetype = document.getElementById("rConfirmPassword").value;

    if (email == ""){
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Email required.');
        return ;
    }
    else if (password == ""){
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Password required.');
        return ;
    }
    else if (passwordRetype == ""){
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Password required.');
        return ;
    }
    else if ( password != passwordRetype ){
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Password does not match retype your Password.');
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        
        $('#loginForm').show();
        $('#registerForm').hide();

        document.getElementById("rFname").value ="";
        document.getElementById("rLname").value ="";
        document.getElementById("rEmail").value ="";
        document.getElementById("rPassword").value="";
        document.getElementById("rConfirmPassword").value="";
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}

function login(){
    event.preventDefault();

    var email = document.getElementById("lEmail").value;
    var password = document.getElementById("lPassword").value;

    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            toastBootstrap.show();
            $(toastBootstrap._element).find('#toastContent').text('Email required.');
            return ;
        }
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Email does not exist.');
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            toastBootstrap.show();
            $(toastBootstrap._element).find('#toastContent').text('Password required.');
            return ;
        }
        toastBootstrap.show();
        $(toastBootstrap._element).find('#toastContent').text('Password does not match.');
        return ;
    }
    else {
        var loginUrl = `home.html?user=${email}`
        window.location.replace(loginUrl);

        document.getElementById("lEmail").value ="";
        document.getElementById("lPassword").value="";
        return ;
    }

}
function registerForm(){
    $('#loginForm').hide();
    $('#registerForm').show();
}
function loginForm(){
    $('#loginForm').show();
    $('#registerForm').hide();
}




  events.forEach(function(events) {
    let eventDiv = $("<div class='col-lg-4 col-md-6'>");
    eventDiv.append(`<div class="event-card">
		<div class="event-image">
			<img src="${events.imagepath}" alt="event image"/>
		</div>
		<div class="event-content">
			<div class="event-top">
				<a href="javascript:void(0)" data-event="${events.id}" onClick="openDetails(this)" class="event-content-title text-dark poppins-semibold">${events.title}</a>
				<p class="event-content-description text-muted mb-3">
					${events.description}
				</p>
				<a href="javascript:void(0)" class="btn btn-primary mb-2 fs-14" onClick="openDetails(this)" data-event="${events.id}">Explore</a>
			</div>
			<div class="event-bottom text-center border-top p-2">
				<i class="icon-location"></i> <span class="text-muted">${events.location}</span>
			</div>
		</div>
	</div>`);

    container.append(eventDiv);
  });


function openDetails(e, getEvent){
    getEvent = $(e).attr('data-event');
    events.forEach(function(e){
        storeEventId = e.id;
        console.log(e.id)
    })
    let destinationurl = `eventDetail.html?id=${getEvent}`
    window.location.replace(destinationurl);
}
function checkIds(id) {
    return events.some(function(check) {
       return check.id === id;
    });
}
window.onload = function(e) {
    let currentPage = window.location.href;
    
    if (currentPage.includes('eventDetail.html')) {
        let urlParams = new URLSearchParams(window.location.search);
        eventMainid = urlParams.get('id');
        let getEventData;
        events.forEach(function(e){
            if(e.id == eventMainid){
                getEventData = {
                    title : e.title,
                    Time : e.Time,
                    date : e.date,
                    description : e.description,
                    imagepath : e.imagepath,
                    location : e.location,
                };
                let eventDetailsSection = $('#eventDetailsAppend');
                eventDetailsSection.append(`<h4 class="text-dark event-detail-title my-5">${getEventData.title}</h4>
                    <div class="event-detail-section pb-2">
                        <div class="row">
                            <div class="col-md-3 event-detail-section-img mb-3">
                                <img src="${getEventData.imagepath}" alt="Event Details">
                            </div>
                            <div class="col-md-9">
                                <div class="event-detail-section-top d-flex flex-column">
                                    <span class="event-detail-section-date poppins-bold mb-2">${getEventData.date} / ${getEventData.Time}</span>
                                    <span class="event-detail-section-location pb-2"><i class="icon-location mr-5" aria-hidden="true"></i> Goa, India</span>
                                </div>
                                <div class="event-detail-section-bottom pt-2">
                                    <h5 class="pt-2 event-detail-section-bottom-header">Event Details</h5>
                                    <p class="text-muted fs-14 pt-3 mb-1">
                                        ${getEventData.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>`)
            } 
        })
        if(checkIds(eventMainid) == false){
            let eventDetailsSection = $('#eventDetailsAppend');
            eventDetailsSection.append('<div class="error-section"><h1>404</h1><p class="text-muted">Facing Technical issue Please Contact to admin</p></div>')
        }
        
    }
};
function addDataToArray(...newData) {
    events = [...events, ...newData];
}

$('#createNewEvent').click(function(){
    event.preventDefault();
    let title = $('#eventTitle').val();
    let Time = $('#eventTime').val();
    let date = $('#eventDate').val();
    let description = $('#eventDesc').val();
    let imagepath = $('#eventImage').val();
    let location = $('#eventLocation').val();


    newData = {
            id: events.length + 1,
            title : title,
            Time : Time,
            date : date,
            description : description,
            imagepath : imagepath,
            location : location
        }
    

    addDataToArray(newData);
    console.log(events);
    $('#createForm')[0].reset();
    container.empty()
    events.forEach(function(events) {
        let eventDiv = $("<div class='col-lg-4 col-md-6'>");
        eventDiv.append(`<div class="event-card">
            <div class="event-image">
                <img src="${events.imagepath}" alt="event image"/>
            </div>
            <div class="event-content">
                <div class="event-top">
                    <a href="javascript:void(0)" data-event="${events.id}" onClick="openDetails(this)" class="event-content-title text-dark poppins-semibold">${events.title}</a>
                    <p class="event-content-description text-muted mb-3">
                        ${events.description}
                    </p>
                    <a href="javascript:void(0)" class="btn btn-primary mb-2 fs-14" onClick="openDetails(this)" data-event="${events.id}">Explore</a>
                </div>
                <div class="event-bottom text-center border-top p-2">
                    <i class="icon-location"></i> <span class="text-muted">${events.location}</span>
                </div>
            </div>
        </div>`);
    
        container.append(eventDiv);
      });
})

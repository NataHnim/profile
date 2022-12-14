
// forEach
Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}
var courses = [
    'Java',
    'PHP',
    'Ruby'
];
var output = courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})


// filter
Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}

// some
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
};

// every
Array.prototype.every2 = function(callback) {
    for(let index in this) {
        if(this.hasOwnProperty(index)){
            if(!callback(this[index], index, this)){
                return false;
            } 
        }
    }
    return true;
}
let result = courses.every2(function (course, index, array) {
    return course.isFinish;
})  
console.log(result);


// map
var  courses = [5,6,3,9];

Array.prototype.map2 = function (callback){
    var len = this.length;
    if(typeof callback != "function")
    throw new TypeError();
    var res = new Array(len);
    var thisp = arguments[1];
    for (let i = 0; i < len; i++) {

       if(i in this)
        res[i] =  callback.call(thisp , this[i], i , this)

    }
    return res
}

function men(course){
    return course
}

var total = courses.map2(men)

console.log(total);

// map agian
Array.prototype.map2 = function (callback) {
    var result = [];
    for (var index in this) {
        if (!this.hasOwnProperty(index)) {
            break;
        }
        result.push(callback(this[index], index, this))
    }
    return result;
};


//reduce

Array.prototype.reduce2 = function(callback, initialvalue){
    let i =0
    if (arguments.length < 2){
        i = 1;
        initialvalue = this[0]
    }
    for (; i < this.length; i++) {
        initialvalue = callback(initialvalue, this[i], i, this)
    }
    return initialvalue
}



// Example Promise
var users = [
    {
        id: 1,
        name: 'L?? B?? Thi???n',
    },
    {
        id: 2,
        name: 'S??n ?????ng',
    },
    {
        id: 3,
        name: 'H??ng Tr???n',
    },
    {
        id: 4,
        name: 'Ki??n Nguy???n',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Ch??a ra b??i m???i ?? anh :)?'
    },
    {
        id: 2,
        user_id: 2,
        content: 'V???a m???i ra xong :D'
    },
    {
        id: 2,
        user_id: 1,
        content: 'C???m ??n anh nhi???u (^_^)'
    }
];
var avatars = [
    {
        id: 1,
        user_id: 1,
        link: 'google.com.vn'
    },
    {
        id: 2,
        user_id: 4,
        link: 'f8.edu.vn'
    },
    {
        id: 3,
        user_id: 3,
        link: 'fullstack.edu.vn'
    },
    {
        id: 4,
        user_id: 2,
        link: 'fullstack.dev'
    }
];

// Creative getcommetns function
function getComments(comments) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
            reject('error function getComments');
        }, 1000)
    });
}
// Creative getUsersById function
function getUsersById (userIds, users) {
    return new Promise(function(resolve, reject) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
            reject('error function getUserId');
        }, 1000)
    })
}
// Creative getAvatarsByUserId function
function getAvatarsById (userIds, avatars) {
    var result = avatars.filter(function(avatar) {
        return userIds.includes(avatar.user_id);
    });
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(result);
            reject('error function getAvatarsById');
        }, 1000)
    });
}
/* 
* N???u getComments th??nh c??ng
* Th???c hi???n getUserById theo comment.user_id
* N???u th??nh c??ng th???c hi???n getAvatarById
* Tr??? v??? k???t qu???
*/
getComments(comments)
    .then(function() {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        return userIds;
    })
    .then(function(userIds) {
        return getUsersById (userIds,users)
            .then(function(users) {
                return users;
            })
            .then(function(users) {
                return getAvatarsById(userIds, avatars)
                    .then(function(avatars) {
                        return {
                            users: users,               // Ch??? n??y v???n b???
                            avatars: avatars,           // CallBack hell
                            comments: comments          // Hay g???i kh??c l?? Pyramid of doom
                        };
                    })
                    .catch(function(error) {
                        console.log(error)
                    })
            })
            .catch(function(error) {
                console.log(error)
            })
    })
    .then(function(data) {
        var commentBlock = document.querySelector('#comments-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var users = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            var avatars = data.avatars.find(function(avatar) {
                return avatar.user_id === comment.user_id;
            })
            html += `<li>${avatars.link} - ${users.name} : ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })
    .catch(function(error) {
        console.log(error)
    })
    .finally(function() {
        console.log('Done');
    })



// lam voi rest api
var courseApi = "http://localhost:3000/courses";

function start() {
 getCourses(renderCourses);
 handleCreateForm();
}

start();

// Functions

// Render Courses

function getCourses(callback) {
 fetch(courseApi)
  .then(function (response) {
   return response.json();
  })
  .then(callback);
}

function renderCourses(courses) {
 var listCoursesBlock = document.querySelector("#list-courses");
 var htmls = courses.map(function (course) {
  return `
  <li class="course-item-${course.id}">
   <h2>${course.name}</h2>
   <p>${course.description}</p>
   <button onclick="handleDeleteCourse(${course.id})">X??a</button>
   <button onclick="handleUpdateCourse(${course.id})">S???a</button>
  </li>`;
 });
 listCoursesBlock.innerHTML = htmls.join("");
}

// CreateCourse

function createCourse(data, callback) {
 var options = {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
 };
 fetch(courseApi, options)
  .then(function (response) {
   return response.json();
  })
  .then(callback);
}

function handleCreateForm() {
 var createBtn = document.querySelector("#create");
 createBtn.onclick = function () {
  var name = document.querySelector('input[name="name"]').value;
  var description = document.querySelector('input[name="description"]').value;
  var formData = {
   name: name,
   description: description,
  };
  if (name != "" && description != "") {
   createCourse(formData, function () {
    getCourses(renderCourses);
   });
  } else {
   alert("H??y nh???p ?????y ????? th??ng tin");
  }
 };
}

// Delete course
function handleDeleteCourse(id) {
 var options = {
  method: "DELETE",
  headers: {
   "Content-Type": "application/json",
  },
 };
 fetch(courseApi + "/" + id, options)
  .then(function (response) {
   return response.json();
  })
  .then(function () {
   var courseItem = document.querySelector(".course-item-" + id);
   if (courseItem) {
    courseItem.remove();
   }
  });
}

// Update course

function updateCourse(id, data, callback) {
 var options = {
  method: "PUT",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
 };
 fetch(courseApi + "/" + id, options)
  .then(function (response) {
   return response.json();
  })
  .then(callback);
}

function handleUpdateCourse(id) {
 var courseItem = document.querySelector(".course-item-" + id);

 var getName = courseItem.querySelector("h2").innerText;
 var getDescription = courseItem.querySelector("p").innerText;

 var name = document.querySelector('input[name="name"]');
 var description = document.querySelector('input[name="description"]');

 name.value = getName;
 description.value = getDescription;
 if (!document.querySelector("#update")) {
  document.querySelector("#create").id = "update";
 }
 document.querySelector("#update").innerText = "L??u";

 var updateBtn = document.querySelector("#update");
 updateBtn.onclick = function () {
  var formData = {
   name: name.value,
   description: description.value,
  };
  if (name.value != "" && description.value != "") {
   updateCourse(id, formData, function () {
    getCourses(renderCourses);
   });
  } else {
   alert("H??y nh???p ?????y ????? th??ng tin");
  }
 };
}

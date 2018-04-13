var header_row = "<tr><th>Name</th><th>Breed</th><th>Color</th><th>Gender</th><th>Zip</th></tr>"
function search() {
  var name = document.getElementById("doggo").value
  if(name == null || name == "") {
    name = (new URL(document.location.href)).searchParams.get("doggo")
  }

  if(name != null && name != "") {
    var doggosWithName = DOGGO_DATA.filter(doggo => doggo.name.toLowerCase() == name.toLowerCase());
    if(doggosWithName.length > 0) {
      html = "<table>" + header_row;
      for(var i=0; i<doggosWithName.length; i++) {
        doggo = doggosWithName[i];
        html += _tr_open(i);
        html += elem(doggo.name) + elem(doggo.breed) + elem(doggo.color) + elem(pp_gender(doggo.gender)) + elem(doggo.ownerZip)
        html += "</tr>"
      }

      document.getElementById('results').innerHTML = html
    }
    else {
      document.getElementById('results').innerHTML = "No doggos named " + name
    }
  }
  else {
    //no-op -- we run search() when page loads incase people hit enter.
  }
}

function elem(s) {
  return "<td>" + s + "</td>";
}

function _tr_open(i) {
  if(i % 2 == 0) {
    return "<tr bgcolor='#D3D3D3'>";
  }
  else {
    return "<tr>";
  }
}

//pretty-print gender
function pp_gender(g) {
  if(g == 'm') {
    return "male";
  }
  if(g == 'f') {
    return "female";
  }
  else {
    return "unkown";
  }
}

<template>
<div>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <a class="navbar-brand" href="index.html">
                <h1><img src="../../static/images/logo.png" alt="Highly_Logo" width="153" height="49" /></h1>
            </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <div class="top-search">
            <form class="navbar-form navbar-right">
                <input type="text" class="form-control" placeholder="Search...">
                <input type="submit" value=" ">
            </form>
        </div>
         <!-- <div class="header-top-right">
            <div class="file">
              <a href="upload.html">Upload</a>
            </div>
        </div> -->
      </div>
      
      <div class="clearfix"> </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "headerNav",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media (min-width: 991px) { 
    a.navbar-brand {
    /* padding: 0 0 0 1em; */
    padding:0 0 0.4em 1.8em;
    }
}

nav.navbar.navbar-inverse.navbar-fixed-top {
    padding: 1.5em 0;
    background: #FFF;
    margin: 0;
    box-shadow: 0px 0 2px #C1C1C1 !important;
}

a.navbar-brand h1 {
    margin: 0;
}

form.navbar-form.navbar-right {
    margin-right: 1em;
    width: 50%;
    float: left !important;
    margin-left: 10em;
    position: relative;
}

.navbar-form .form-control {
    width: 100%;
}

.top-search form input[type="text"] {
    position: relative;
    padding: 6px 43px 6px 12px;
    outline: none;
    box-shadow: 0 0 0;
}

.top-search form input[type="text"]:focus {
    outline: none;
    box-shadow: 0 0 0;
    border: 1px solid #ccc;
}

.top-search form input[type="submit"] {
    background: url('../assets/search_icon.png') no-repeat 0px 0px !important;
    width: 18px !important;
    height: 18px !important;
    border: none !important;
    position: absolute !important;
    outline: none !important;
    top: 9px;
    right: 26px;
}
@media (max-width: 640px) {
.top-search form input[type="submit"] {
    right: 26px;
    top: 18px;
    }
form.navbar-form.navbar-right {
        width:60%;
    }
}
@media (max-width: 767px) {
.top-search form input[type="submit"] {
    right: 26px;
    top: 18px;
    } 
form.navbar-form.navbar-right {
        width:60%;
    }
}
.header-top-right {
    float: right;
}

.file {
    float: left;
    margin: 1.1em 0 0 0;
}

.file input[type="text"] {
    width: 60%;
    padding: 9px;
    border: none;
    font-size: 1.1em;
    border: 1px solid #705e57;
    font-weight: 600;
    color: #705e57;
    outline: none;
    background: #fff;
    font-weight: 500;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.file a {
    padding: 8px 20px;
    background: #F7F7F7;
    color: #272C2E;
    font-size: 14px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    -ms-border-radius: 3px;
    text-decoration: none;
}

.file a:hover {
    opacity: 0.8;
}

.file a:focus {
    outline: none;
}
</style>

<template>
  <div>
    <nav class="light-blue lighten-1">
      <div class="container">
        <div class="nav-wrapper">
          <!-- <a href="#" class="brand-logo">&#128209;ProjNotes</a> -->
          <router-link to="/" class="brand-logo">
            &#128209;ProjExercises
          </router-link>

          <ul class="right hide-on-med-and-down">
            <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown">
                1ra parte<i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown" class="dropdown-content">
                <li>
                  <router-link to="/Ejercicio1"> Ejercicio 1 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio2"> Ejercicio 2 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio3"> Ejercicio 3 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio4"> Ejercicio 4 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio5"> Ejercicio 5 </router-link>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-trigger1" href="#" data-target="dropdown1">
                2da parte<i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <router-link to="/Ejercicio6"> Ejercicio 6 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio7"> Ejercicio 7 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio8"> Ejercicio 8 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio9"> Ejercicio 9 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio10"> Ejercicio 10 </router-link>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-trigger2" href="#" data-target="dropdown2">
                3ra parte<i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown2" class="dropdown-content">
                <li>
                  <router-link to="/Ejercicio11"> Ejercicio 11 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio12"> Ejercicio 12 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio13"> Ejercicio 13 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio14"> Ejercicio 14 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio15"> Ejercicio 15 </router-link>
                </li>
              </ul>
            </li>

            <li>
              <a class="dropdown-trigger3" href="#" data-target="dropdown3">
                4ta parte<i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id="dropdown3" class="dropdown-content">
                <li>
                  <router-link to="/Ejercicio11"> Ejercicio 16 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio12"> Ejercicio 17 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio13"> Ejercicio 18 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio14"> Ejercicio 19 </router-link>
                </li>

                <li>
                  <router-link to="/Ejercicio15"> Ejercicio 20 </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector(".dropdown-trigger");
      var instances = M.Dropdown.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector(".dropdown-trigger1");
      var instances = M.Dropdown.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector(".dropdown-trigger2");
      var instances = M.Dropdown.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelector(".dropdown-trigger3");
      var instances = M.Dropdown.init(elems);
    });
  },
};
</script>

<style>
body {
  margin-left: 5.5rem;
  margin-right: 5.5rem;
}
</style>
import Vue from "vue";
import VueRouter from "vue-router";

import Hello from "@/components/HelloWorld";
import Ej1 from "@/components/Ejercicio1";
import Ej2 from "@/components/Ejercicio2";
import Ej3 from "@/components/Ejercicio3";
import Ej4 from "@/components/Ejercicio4";
import Ej5 from "@/components/Ejercicio5";
import Ej6 from "@/components/Ejercicio6";
import Ej7 from "@/components/Ejercicio7";
import Ej8 from "@/components/Ejercicio8";
import Ej9 from "@/components/Ejercicio9";
import Ej10 from "@/components/Ejercicio10";
import Ej11 from "@/components/Ejercicio11";
import Ej12 from "@/components/Ejercicio12";
import Ej13 from "@/components/Ejercicio13";
import Ej14 from "@/components/Ejercicio14";
import Ej15 from "@/components/Ejercicio15";
import Ej16 from "@/components/Ejercicio16";
import Ej17 from "@/components/Ejercicio17";
import Ej18 from "@/components/Ejercicio18";
import Ej19 from "@/components/Ejercicio19";
import Ej20 from "@/components/Ejercicio20";
import Ej21 from "@/components/Ejercicio21";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Hello
    },
    {
      path: "/Ejercicio1",
      component: Ej1
    },
    {
      path: "/Ejercicio2",
      component: Ej2
    },
    {
      path: "/Ejercicio3",
      component: Ej3
    },
    {
      path: "/Ejercicio4",
      component: Ej4
    },
    {
      path: "/Ejercicio5",
      component: Ej5
    },
    {
      path: "/Ejercicio6",
      component: Ej6
    },
    {
      path: "/Ejercicio7",
      component: Ej7
    },
    {
      path: "/Ejercicio8",
      component: Ej8
    },
    {
      path: "/Ejercicio9",
      component: Ej9
    },
    {
      path: "/Ejercicio10",
      component: Ej10
    },
    {
      path: "/Ejercicio11",
      component: Ej11
    },
    {
      path: "/Ejercicio12",
      component: Ej12
    },
    {
      path: "/Ejercicio13",
      component: Ej13
    },
    ,
    {
      path: "/Ejercicio14",
      component: Ej14
    },
    ,
    {
      path: "/Ejercicio15",
      component: Ej15
    },
    ,
    {
      path: "/Ejercicio16",
      component: Ej16
    },
    ,
    {
      path: "/Ejercicio17",
      component: Ej17
    },
    ,
    {
      path: "/Ejercicio18",
      component: Ej18
    },
    ,
    {
      path: "/Ejercicio19",
      component: Ej19
    },
    ,
    {
      path: "/Ejercicio20",
      component: Ej20
    },
    ,
    {
      path: "/Ejercicio21",
      component: Ej21
    }
  ]
});

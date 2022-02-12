<template>
<div>
  <!-- <Home/> -->
<!--  <HelloWorld/> -->
<!--<InterpolationData /> -->
<!--<clickEvent /> -->
<!--<twoWayBinding/>-->
<!--<getInputValue/>-->
<!--<ifElse/>-->
<!--<loop />-->
<!--<parent />-->
<!--<reuseParent />-->
<!--<htmlBinding />-->
<!--<classBinding />-->
<!--<parentForCtoP />-->
<!--<ref />-->
<!-- <simpleForm /> -->
<!-- <modifiers /> -->
<!-- <non-props-data-parent /> -->
<!-- <computed-property /> -->
<!-- <watchers /> -->
<!-- <slot-parent /> -->
<!-- <multiple-slot-parent /> -->
<!-- <dynamic-comp-parent /> -->
<!-- <teleport-footer /> -->
<!-- <teleport to='#footer'>
  <teleport-footer />
</teleport> -->
<!-- <before-create-and-created /> -->
<!-- <before-mount-and-mounted /> -->
<!-- <before-update-and-updated /> -->
<!-- <before-unmount-and-unmounted /> -->
<!-- <router-link to="/">Home</router-link><br />
<router-link to="/login">Login</router-link><br />
<router-link to="/profile/ram">Ram's Profile</router-link><br />
<router-link to="/profile/krishna">Krishna's Profile</router-link><br />
<router-link to="/profile/param">Param's Profile</router-link><br />
<router-view></router-view> -->
<api-call />
</div>
</template>

<script>
import ApiCall from './components/HTTPRequest/apiCall.vue'
// import DynamicCompParent from './components/dynamicComponents/dynamicCompParent.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import BeforeUnmountAndUnmounted from './components/lifeCycleMethods/beforeUnmountAndUnmounted.vue'
// import BeforeUpdateAndUpdated from './components/lifeCycleMethods/beforeUpdateAndUpdated.vue'
// import BeforeMountAndMounted from './components/lifeCycleMethods/beforeMountAndMounted.vue'
// import BeforeCreateAndCreate from './components/lifeCycleMethods/beforeCreateAndCreated.vue'
// import TeleportFooter from './components/teleportFooter.vue'
// import MultipleSlotParent from './components/multipleSlotParent.vue'
// import SlotParent from './components/slotParent.vue'
// import ComputedProperty from './components/computedProperty.vue'
// import Watchers from './components/watchers.vue'
// import NonPropsDataParent from './components/nonPropsDataParent.vue'
// import modifiers from './components/modifiers.vue';
// import InterpolationData from './components/Interpolation-data.vue'
// import clickEvent from './components/clickEvent.vue';
// import twoWayBinding from './components/twoWayBinding.vue';
// import getInputValue from './components/getInputValue.vue';
// import ifElse from './components/ifElse.vue';
// import loop from './components/loop.vue';
// import parent from './components/parent.vue';
// import reuseParent from './components/reuseParent.vue';
// import htmlBinding from './components/htmlBinding.vue';
// import classBinding from './components/classBinding.vue';
// import parentForCtoP from './components/parentForCtoP.vue';
// import ref from './components/ref.vue';
// import simpleForm from './components/simpleForm.vue';

export default {
  name: 'App',
  components: {
    ApiCall
    // Home,
    // BeforeUnmountAndUnmounted,
    // BeforeUpdateAndUpdated,
    // BeforeMountAndMounted,
    // BeforeCreateAndCreated,
    // TeleportFooter,
    // MultipleSlotParent,
    // DynamicCompParent,
    // Watchers,
    // SlotParent,    
    // ComputedProperty,
    // NonPropsDataParent,
 //   HelloWorld,
    // InterpolationData,
    // clickEvent,
    // twoWayBinding,
    // getInputValue
    // ifElse
    // loop
    // parent
    // reuseParent
    // htmlBinding
    // classBinding
    // parentForCtoP
    // ref
    // simpleForm,
    // modifiers
  }
}
</script>



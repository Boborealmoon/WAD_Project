<template>
  <div class="text-center d-flex">
    <!-- register  -->
    <div class="hovereffect rounded-4">
      <router-link class="nav-link " to="/register">
        <div :class="highlighLink('/register')">
          <div class="fw-semibold">Register</div>
        </div>
      </router-link>
    </div>

    <!-- login -->
    <div class="hovereffect rounded-4">
      <router-link class="nav-link" to="/login">
        <div :class="highlighLink('/login')">
          <div class="fw-semibold">Login</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// this page the all the navigation data(find recipe, view promotion, market) which consist of
// link name, link logo and the path they are directing once click

export default {
  data() {
    return {};
  },
  methods: {
    highlighLink(pathstring) {
      // console.log(this.$route.path);
      // console.log(eachLink.routeTo);
      return this.$route.path.startsWith(pathstring)
        ? "mx-2 highlightBackground"
        : "mx-2 ";
    },
  },
};
</script>

<style>
.highlightBackground {
  color: #FBE8A6;
}

.hovereffect :hover{
  color: #FBE8A6;
}
</style>

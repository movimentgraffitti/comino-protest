<template>
  <div>
    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen align-items-center justify-content-start" style="height: 915px;">
          <div class="banner-content col-lg-9 col-md-12">
            <h1>
              Donate <br>
              To stop the ITS Project
            </h1>
            <a href="#donate" class="head-btn btn text-uppercase">Donate Now</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- Start callto Area -->
    <section class="callto-area relative">
      <div class="container">
        <div class="row d-flex callto-wrap justify-content-between pt-40 pb-40">
          <h3 class="text-white">Help Us stop them and Donate now</h3>
          <a href="#donate" class="head-btn head-btn2 btn text-uppercase">Donate Now</a>
        </div>
      </div>
    </section>
    <!-- End callto Area -->
    <!-- Start project Area -->
    <section class="project-area section-gap" id="project">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 pb-80 header-text">
            <h1>Why we want to stop ITS Project</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus leo, laoreet quis eros id, cursus mattis libero. Pellentesque condimentum mauris erat, in commodo metus varius sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec posuere nisi sit amet urna ultrices lacinia. Nullam et neque eu massa varius fringilla vitae sit amet elit. Praesent placerat odio arcu. Nulla nisi erat, pretium ac elementum eu, vestibulum quis ex. Quisque eget ante commodo, suscipit augue a, placerat mi. Sed consectetur leo eget turpis pulvinar, id aliquet nulla aliquam. Sed aliquet nibh justo, vestibulum dictum sapien lobortis eget. Etiam tempor dictum odio consequat interdum. Nulla euismod feugiat molestie. In iaculis mattis ex, non pharetra magna eleifend vitae. Etiam nisi massa, tincidunt ac convallis eget, posuere eu erat. In ac enim non massa iaculis dictum sit amet nec nibh. Etiam sodales, arcu vel finibus vehicula, elit mauris varius ipsum, vitae iaculis lorem odio in ligula.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras faucibus feugiat arcu ac feugiat. Aenean sit amet volutpat metus, in cursus sem. Donec ac volutpat libero, vitae auctor dolor. In ultrices hendrerit metus, a porta libero rhoncus sodales. Ut tempus elit sed ipsum semper, sit amet congue arcu condimentum. Sed eu elementum tortor. Donec eleifend sem lacus, vel cursus enim auctor vel. Quisque varius blandit nunc, quis hendrerit eros vehicula non. Nulla maximus est a tristique sagittis. Mauris eleifend, turpis non tincidunt elementum, enim arcu consectetur est, vitae iaculis ligula lorem vitae ligula. Vestibulum id scelerisque massa. Curabitur porta faucibus ligula dapibus interdum. Quisque blandit interdum nisi, id consectetur enim tempus vel. Nam dignissim erat eget metus feugiat, ornare ultrices augue bibendum. Nunc id aliquet sem.
            </p>
            <p>
              Proin at elit ac orci consectetur rutrum. Nam varius tempor dui, at porttitor metus iaculis et. Vestibulum porta lectus eu dolor sollicitudin consectetur. Aenean eget bibendum lacus. Nunc suscipit arcu nibh, placerat fringilla purus volutpat quis. Maecenas id hendrerit eros, at viverra libero. Mauris nec laoreet tellus. Nunc nunc est, ultricies quis dolor a, maximus bibendum odio. Praesent tempor turpis a porta mollis. Sed nec leo ut odio consectetur finibus. Suspendisse posuere finibus dictum. Nullam sit amet nibh diam.
            </p>
            <p>
              Sed eu odio eget tellus sagittis pellentesque. Fusce mauris enim, vehicula eget quam at, congue vestibulum leo. Maecenas sollicitudin eget lorem porttitor consequat. Etiam finibus tristique tincidunt. Sed mauris odio, finibus auctor libero et, viverra semper nisl. Praesent sagittis sapien odio, id consectetur odio luctus quis. Praesent luctus efficitur faucibus. Fusce luctus purus eget turpis commodo, iaculis dapibus urna tempus. Ut ac diam neque. Nullam sed nulla vel ante luctus varius nec id nisl. Suspendisse potenti. Donec tincidunt laoreet hendrerit. Nullam sed felis nisl.
            </p>
            <p>
              Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In feugiat laoreet erat a congue. Fusce at lobortis nisi. Vivamus sed justo sapien. Aliquam gravida augue vel posuere facilisis. Duis finibus augue lectus, a cursus mi venenatis et. Aenean scelerisque massa erat. Sed auctor sapien vel libero gravida, dignissim volutpat libero finibus. Nam faucibus in augue vitae dictum. Aliquam accumsan nunc mollis, viverra magna id, tempor mi. Praesent nec est auctor felis elementum consectetur
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End project Area -->
    <donation/>
  </div>
</template>

<script>
import Donation from "@/components/Donation";
export default {
  name: 'HelloWorld',
  components: {Donation},
  props: {
    msg: String
  }
}
</script>

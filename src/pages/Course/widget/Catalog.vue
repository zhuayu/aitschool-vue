<template>
  <div class="course--catalog">
    <div class="course--catalog__content">
      <p class="course--catalog__title">学前需知</p>
      <p class="course--catalog__description">{{course.tips}}</p>
    </div>
    <div class="courser--chapter">
      <div v-for="(chapter, index) in course.chapters" :key="index" class="chapter-item">
            <div class="courser--chapter__title" :data-id="chapter.id">第 {{index + 1}} 章 {{chapter.name}}</div>
            <div v-for="(section, sindex) in chapter.sections" :key="sindex" class="courser--chapter__sections">
              <span>第 {{sindex + 1}} 节 {{section.name}}</span>
                <!-- <router-link v-else :to="{ name:'section_page',params: {
                    id: course.id,
                    chapter: chapter.id,
                    section: section.id }}" >第 {{sindex + 1}} 节 {{section.name}}</router-link> -->
            </div>
            <div class="courser--chapter__homeworks" v-for="homework in chapter.homeworks" :key="homework.id">
              <span class="courser--chapter__link">{{homework.name}}</span>
                <!-- <router-link v-if="can_learn" class="link homeworks-item"  v-for="homework in chapter.homeworks" :key="homework.id" :to="{ name:'homework_page',params: {
                    id: homework.id  }}" >{{homework.name}}
                </router-link> -->
            </div>
      </div>
    </div>
    <div class="course--task" v-if="false">
      <div class="course--task__title">实战训练</div>
      <div class="course--task__item" v-for="(task) in course.tasks" :key="task.id">
        <span>{{task.name}}</span>
          <!-- <router-link  v-if="can_learn" class="task-item link"  v-for="task in course.tasks" :key="task.id" :to="{ name:'post_page',params: {
              id: task.id, course_id: course.id, type: 'task'  }}" >{{task.name}}
          </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },
  props: {
    course: {
      type: Object,
      default: () => {
        return {
          tasks: []
        }
      }
    },
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  .course--catalog{
    position: relative;
    background: #fff;
    padding: 20px;
    margin-top: 10px;

    .course--catalog__content{
      border: 1px solid #e4e4e4;
      padding-top: 10px;
      border-bottom: 0;

      .course--catalog__title{
        font-size: 16px;
        color: #333;
        line-height: 2;
        padding-left: 20px;
        margin-left: -1px;
        border-left: 2px solid #2789d9;
      }

      .course--catalog__description{
        font-size: 14px;
        line-height: 20px;
        color: #666;
        min-height: 40px;
        margin: 0 20px;
        padding-bottom: 10px;
      }
    }

    .courser--chapter{
      border: 1px solid #e4e4e4;
      border-top: 0;

      .courser--chapter__title{
        padding: 0 20px;
        font-size: 14px;
        line-height: 40px;
        color: #7d97ad;
        background: #eff1f3;
      }

      .courser--chapter__sections,
      .courser--chapter__homeworks{
        padding: 0 40px;
        line-height: 40px;
        color: #666;
        font-size: 12px;

        a{
          display: block;
          height: 100%;
          color: #666;
        }

        &:hover{
          background: #f8f9fb;

          a{
            color: #2789d9;
          }
        }
      }

      .link{
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: #2789d9;
      }
    }

    .course--task{
      margin-top: 20px;

      .course--task__title{
        padding: 0 20px;
        line-height: 40px;
        font-size: 16px;
        color: #333;
        border-bottom: 1px solid #e4e4e4;
      }

      .course--task__item{
        padding: 0 20px;
        line-height: 40px;
        height: 40px;
        color: #666;
        font-size: 13px;
      }

      .link{
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: #2789d9;
        letter-spacing: 1px;
      }
    }
  }
</style>

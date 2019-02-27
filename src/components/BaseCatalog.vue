<template>
  <div class="course--catalog">
    <div class="course--chapter">
      <div v-for="(chapter, index) in course.chapters" :key="index" class="chapter-item">
            <div class="course--chapter__title" :data-id="chapter.id">第 {{index + 1}} 章 {{chapter.name}}</div>
            <div v-for="(section, sindex) in chapter.sections" :key="sindex" 
              :class="['course--section__item', section.id == section_id ? 'active' : '']">
              <span v-if="!canLearn">第 {{sindex + 1}} 节 {{section.name}}</span>
              <router-link v-else
                :to="{ name:'Section',params: {
                course_id: course.id,
                chapter_id: chapter.id,
                section_id: section.id }}">第 {{sindex + 1}} 节 {{section.name}}
              </router-link>
            </div>
            <div v-if="false">
              <div :class="['course--homeworks__item']" v-for="homework in chapter.homeworks" :key="homework.id">
                <span>{{homework.name}}</span>
                  <!-- <router-link v-if="can_learn" class="link homeworks-item"  v-for="homework in chapter.homeworks" :key="homework.id" :to="{ name:'homework_page',params: {
                      id: homework.id  }}" >{{homework.name}}
                  </router-link> -->
              </div>
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
    canLearn: {
      type: Boolean,
      default: false
    },
    section_id: {
      type: [Number,String],
      default: 0,
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  .course--catalog{
    position: relative;
    background: #fff;

    .course--chapter{

      .course--chapter__title{
        padding: 0 20px;
        font-size: 14px;
        line-height: 40px;
        color: #7d97ad;
        background: #eff1f3;
      }

      .course--section__item,
      .course--homeworks__item{
        padding: 0 20px;
        line-height: 40px;
        color: #666;
        font-size: 12px;
        
        a{
          display: block;
        }

        &.active{
          color: #2789d9;
          font-weight: 600;
        }

        &:hover{
          background: #f8f9fb;
          color: #2789d9;
        }
      }

      .course--catalog__active{
        display: block;
        height: 100%;
        color: #666;
        &:hover{
          color: #2789d9;
        }

        .course--catalog__activeTag{
          float: right;
          font-size: 12px;
          color: #2789d9;
        }
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

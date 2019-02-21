<template>
  <div class="recommend--container">
    <ul class="recommend--tab">
      <li v-for="(data, index) in recommends" :key="index"  
        @click="handleCheckout(index)"
        :class="['recommend--tab__item', (index === page ? 'active' : '')]">{{data.tab}}</li>
    </ul>
    
    <div class="recommend--content">
      <div v-for="(data, index) in recommends" :key="index"
        :class="['recommend--content__container', (index === page ? 'active' : '')]">
        <ul class="recommend--card">
          <li class="recommend--card__item" v-for="(item, index) in data.list" :key="index" >
            <a :href="item.link" target="_blank">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      page: 0,
    }
  },
  props: {
    recommends: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  methods: {
    handleCheckout (index) {
      if(this.page !== index) {
        this.page = index
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .recommend--container{
      max-width: 1000px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #e4e4e4;
      transition: all .2s ease;
      &:hover{
        box-shadow: 5px 5px 25px 0px rgba(46,61,73,0.12);
      }
      
      .recommend--tab{
        display: flex;
        align-items:center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        .recommend--tab__item{
          flex-grow:1;
          flex-shrink:0;
          height: 55px;
          color: #7d97ad;
          line-height: 54px;
          text-align: center;
          background-color: #fafbfc;
          border-bottom: 1px solid #dbe2e8;
          cursor: pointer;

          &.active{
            color: #333;
            background-color: #fff;
            border-bottom: 1px solid #fff;
            border-left: 1px solid #dbe2e8;
            border-right: 1px solid #dbe2e8;
          }

          &:first-child{
            &.active{
              border-left: 0;
            }
          }

          &:last-child{
            &.active{
              border-right: 0;
            }
          }
        }
      }

      .recommend--content{
        padding: 20px 40px;
        overflow: hidden;

        .recommend--content__container{
          display: none;
          &.active{
            display: block;
          }
        }

        .recommend--card{
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          align-items:top;
          list-style-type: none;
          margin: 0;
          padding: 0;

          .recommend--card__item{
            position: relative;
            flex-grow: 1;
            flex-shrink: 0;
            width: 50%;
            padding-left: 40px;
            margin-bottom: 24px;
            font-size: 16px;
            line-height: 28px;
            &:before{
              position: absolute;
              top: 0;
              left: 0;
              display: inline-block;
              width: 20px;
              height: 20px;
              margin-top: 5px;
              border-radius: 50%;
              content: '';
              background: #15c26b url(~@/assets/images/icon/recommend_icon_yes.svg) no-repeat center;
              background-size: 80%;
            }
            a{
              display: block;
              min-height: 28px;
              color: #525c65;
              text-decoration: none;
              word-wrap:break-word;
              transition: all .2s ease;
              &:hover{
                color: #02b3e4;
              }
            }
          }
        }
      }
    }
</style>

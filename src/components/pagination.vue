<script>
import {defineComponent} from 'vue';
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons-vue";
import {useAppState} from "@/store/modules/app.js";

export default /*#__PURE__*/defineComponent({
  name: 'Vue3paginator',
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 100
    },
    space: {
      type: String,
      default: "..."
    }
  },
  components: {
    ArrowLeftOutlined,
    ArrowRightOutlined,
  },
  data() {
    return {
      activePage: this.pageNum
    };
  },
  computed: {
    pages() {
      const pages = [];
      const edge = 2;
      const count = Math.ceil(this.total / this.pageSize);

      for (let i = 1; i <= count; i++) {
        const _distance = Math.abs(i - this.activePage);

        if (
            i === 1 ||
            i === count ||
            _distance < edge ||
            (_distance === edge && _distance === count - 2)
        ) {
          pages.push({
            id: i,
            n: i
          });
        } else if (_distance === edge) {
          pages.push({
            id: i,
            n: this.space
          });
        }
      }
      return pages;
    },
    appState(){
      const appState =useAppState()
      return appState
    }
  },
  methods: {
    setPage(page) {
      if (isNaN(page) || page === Number(this.activePage)) return;
      this.activePage = page;
      this.$emit("change", page.toString());
    },
  },
  watch: {
    pageNum(newValue, oldValue) {
      console.log(12456)
      if (newValue !== oldValue)
        this.activePage = parseInt(newValue );
    }
  }
});
</script>

<template>
  <div class="paginator-container" :class="appState.media+'-paginator-container'" >
    <a
        @click.prevent="setPage(activePage > 1 ? activePage - 1 : 1)"
        class="paginator-item paginator-item-prev"
        :class="{ disabled: activePage === 1 }"
    >
      <slot name="prev-button">
        <ArrowLeftOutlined/>
      </slot>
    </a>

    <div class="paginator-items">
      <a
          v-for="p in pages"
          :key="p.id"
          class="paginator-item"
          :class="{
          active: activePage === p.n,
          space: p.n === space
        }"
          @click.prevent="setPage(p.n)"
      >
        {{ p.n }}
      </a>
    </div>

    <a
        @click.prevent="
        setPage(
          activePage < pages[pages.length - 1].n
            ? activePage + 1
            : pages[pages.length - 1].n
        )
      "
        class="paginator-item paginator-item-next"
        :class="{ disabled: activePage === pages[pages.length - 1]?.n }"
    >
      <slot name="next-button">
        <ArrowRightOutlined/>
      </slot>
    </a>
  </div>
</template>

<style>
:root {
  --primary-color: #FAAC07;
  --pg-item-width-pc: 40px;
  --pg-item-height-pc: 48px;
  --pg-border-radius-pc: 30px;
  --pg-item-distance: 0;
  --pg-backgroud-color: #fff;
  --pg-color: #737578;
  --pg-nav-width-pc:71px;
  --pg-item-width: 0.4rem;
  --pg-item-height: 0.48rem;
  --pg-border-radius: 0.3rem;
  --pg-nav-width:0.71rem;
}

.paginator-container {
  overflow: hidden;
  font-family: "KrossNeueGrotesk-Bold";
  border-radius: var(--pg-border-radius);
  width: max-content;
  color: var(--pg-color);
  background: var(--pg-backgroud-color);
  display: flex;
  align-items: center;
  gap: var(--pg-item-distance);
}

.paginator-items {
  display: flex;
  gap: var(--pg-item-distance);
}

.paginator-item:not(.disabled) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--pg-item-width);
  height: var(--pg-item-height);
  &:hover{
    background:#EAE8E9  ;
    color: #FAAC07;
  }
}

.paginator-item.active {
  font-family: "KrossNeueGrotesk-Heavy";
  background: var(--primary-color);
  color: #000;
}

.paginator-item:not(.active, .space):active {
  color: var(--primary-color);
}

.paginator-item:not(.disabled, .space) {
  cursor: pointer;
  opacity: 1;
}
.paginator-item.disabled {
  background:#fff;
  color: #D6D6D6;
  &:hover{
    background:#fff;
    color: #D6D6D6;
  }
}

.paginator-item-next,.paginator-item-prev {
  width: var(--pg-nav-width) !important;
  color: #737578;
}
.pc-paginator-container{
  border-radius: var(--pg-border-radius-pc);
  .paginator-item:not(.disabled) {
    width: var(--pg-item-width-pc);
    height: var(--pg-item-height-pc);
  }
  .paginator-item-next,.paginator-item-prev {
    width: var(--pg-nav-width-pc) !important;
  }
}


</style>

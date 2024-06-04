<template>
  <div class="boxes">
    <input v-model="filters.name" placeholder="Name" />
    <input v-model="filters.status" placeholder="Status" />
    <button @click="applyFilters">Apply</button>
    <h1>CartoonCharacters</h1>
    <div class="cells">
      <ul>
        <li v-for="cartoon in cartoons" :key="cartoon.id">
          <h2>{{ cartoon.name }}</h2>
          <p>Status: {{ cartoon.status }}</p>
          <p>Species: {{ cartoon.species }}</p>
          <p>Type: {{ cartoon.type }}</p>
          <p>Gender: {{ cartoon.gender }}</p>
          <p>Origin: {{ cartoon.origin.name }}</p>
          <p>Location: {{ cartoon.location.name }}</p>
          <img :src="cartoon.image" :alt="cartoon.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const cartoons = ref([]);
    const filters = ref({ name: "", status: "" });

    const fetchCartoons = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
          {
            params: filters.value,
          }
        );
        cartoons.value = response.data.results;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          cartoons.value = [];
        } else {
          console.error(error);
        }
      }
    };

    const applyFilters = () => {
      fetchCartoons();
    };

    onMounted(fetchCartoons);

    return {
      cartoons,
      filters,
      applyFilters,
    };
  },
};
</script> 

<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center text-6xl font-bold">Tablas</h2>
    <km-table shadow rounded :header="datahead">
      <km-table-row
        v-for="(product, i) in products"
        :key="i"
        :items="product.columns"
      />
    </km-table>
    <km-table actions color="purple" shadow>
      <template #header>
        <th scope="col" class="px-6 py-3">codigo</th>
        <th scope="col" class="px-6 py-3">Color</th>
        <th scope="col" class="px-6 py-3">Category</th>
        <th scope="col" class="px-6 py-3">Price</th>
      </template>
      <km-table-row
        v-for="(product, i) in products"
        :key="i"
        :items="product.columns"
        :actions="product.actions"
      />
    </km-table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs",
});
const datahead = ["product name", "color", "category", "price"];
const products = [
  {
    columns: {
      product: "Apple MacBook Pro 17",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    actions: [
      { href: "#", icon: "Edit" },
      { href: "#", icon: "View" },
      { href: "#", icon: "Delete" },
    ],
  },
  {
    columns: {
      product: "Asus Zenbook",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    actions: [
      { href: "#", icon: "Edit" },
      { href: "#", icon: "View" },
      { href: "#", icon: "Delete" },
    ],
  },
];
</script>

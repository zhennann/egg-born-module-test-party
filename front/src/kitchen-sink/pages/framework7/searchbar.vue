<template>
  <eb-page>
    <eb-navbar large :title="$text('Searchbar')" eb-back-link="Back">
      <f7-subnavbar :inner="false">
        <f7-searchbar search-container=".search-list" search-in=".item-title" :disable-button="!$theme.aurora"></f7-searchbar>
      </f7-subnavbar>
    </eb-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found"></f7-list-item>
    </f7-list>
    <f7-list class="search-list searchbar-found">
      <f7-list-item title="Acura"></f7-list-item>
      <f7-list-item title="Audi"></f7-list-item>
      <f7-list-item title="BMW"></f7-list-item>
      <f7-list-item title="Cadillac "></f7-list-item>
      <f7-list-item title="Chevrolet "></f7-list-item>
      <f7-list-item title="Chrysler "></f7-list-item>
      <f7-list-item title="Dodge "></f7-list-item>
      <f7-list-item title="Ferrari "></f7-list-item>
      <f7-list-item title="Ford "></f7-list-item>
      <f7-list-item title="GMC "></f7-list-item>
      <f7-list-item title="Honda"></f7-list-item>
      <f7-list-item title="Hummer"></f7-list-item>
      <f7-list-item title="Hyundai"></f7-list-item>
      <f7-list-item title="Infiniti "></f7-list-item>
      <f7-list-item title="Isuzu "></f7-list-item>
      <f7-list-item title="Jaguar "></f7-list-item>
      <f7-list-item title="Jeep "></f7-list-item>
      <f7-list-item title="Kia"></f7-list-item>
      <f7-list-item title="Lamborghini "></f7-list-item>
      <f7-list-item title="Land Rover"></f7-list-item>
      <f7-list-item title="Lexus "></f7-list-item>
      <f7-list-item title="Lincoln "></f7-list-item>
      <f7-list-item title="Lotus "></f7-list-item>
      <f7-list-item title="Mazda"></f7-list-item>
      <f7-list-item title="Mercedes-Benz"></f7-list-item>
      <f7-list-item title="Mercury "></f7-list-item>
      <f7-list-item title="Mitsubishi"></f7-list-item>
      <f7-list-item title="Nissan "></f7-list-item>
      <f7-list-item title="Oldsmobile "></f7-list-item>
      <f7-list-item title="Peugeot "></f7-list-item>
      <f7-list-item title="Pontiac "></f7-list-item>
      <f7-list-item title="Porsche"></f7-list-item>
      <f7-list-item title="Regal"></f7-list-item>
      <f7-list-item title="Saab "></f7-list-item>
      <f7-list-item title="Saturn "></f7-list-item>
      <f7-list-item title="Subaru "></f7-list-item>
      <f7-list-item title="Suzuki "></f7-list-item>
      <f7-list-item title="Toyota"></f7-list-item>
      <f7-list-item title="Volkswagen"></f7-list-item>
      <f7-list-item title="Volvo"></f7-list-item>
    </f7-list>
  </eb-page>
</template>
<script>
export default {};

</script>

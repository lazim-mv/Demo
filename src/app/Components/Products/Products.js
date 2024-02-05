"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/products.module.css";
import productData, { productTabs } from "../../../Contents/Products";
import Image from "next/image";
import Link from "next/link";

function Products() {
  const [selectedTab, setSelectedTab] = useState(productTabs[0]);
  const [selectCardTransition, setSelectCardTransition] = useState();

  useEffect(() => {
    if (
      (selectedTab != null && selectedTab != undefined) ||
      selectedTab != ""
    ) {
      setSelectCardTransition(selectedTab.id);
    }
  }, [selectedTab]);
  const handleCardClick = (data) => {
    console.log(selectedTab.id, "imagePathSelected", selectCardTransition);
    setSelectedTab(data);
  };

  return (
    <productsmain className={styles.productsMain} id="products">
        <div className={styles.productTitle}>
          <h1>Premium Picks</h1>
        </div>

        <div className={styles.cardsContainer}>
            {productData.map((data, index) => (
              <div
                key={index}
                className={
                  selectedTab === data
                    ? `${styles.selected} ${styles.card}`
                    : styles.card
                }
                onClick={() => handleCardClick(data)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={data.img}
                    layout="responsive"
                    width={24}
                    height={24}
                    className={styles.bottomCardImage}
                    objectFit="contain"
                    objectPosition="center"
                    alt={`Image${data.id}`}
                    quality={100}
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className={styles.contentContainer}>
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Display enlarged image for the selected card */}
        {selectedTab && (
          <div className={styles.selectedCardContainer}>
            <div
              className={
                selectedTab.id === selectCardTransition
                  ? `${styles.selectedCardContainerTransition} ${styles.selectedCardContent}`
                  : styles.selectedCardContent
              }
              key={selectedTab ? selectedTab.label : "empty"}

            >
              <div className={styles.selectedCardImage}>
                <Image
                  src={selectedTab.img}
                  layout="responsive"
                  width={240} 
                  height={240}
                  objectFit="contain"
                  objectPosition="center"
                  alt={`SelectedImage${selectedTab.id}`}
                  quality={100}
                  loading="lazy"
                  unoptimized
                />
              </div>
              <div className={styles.selectedCardDetails}>
                <h4>{selectedTab.title}</h4>
                <p>{selectedTab.briefDescription}</p>

                <div className={styles.productButton}>
                  <Link href="">Know More</Link>
                </div>
              </div>
            </div>
          </div>
        )}
    </productsmain>
  );
}

export default Products;

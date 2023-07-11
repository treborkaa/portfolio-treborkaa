// TODO FlickR Service
// this.flickrApiService.flickrImagesList.subscribe((data) => {
// 	data.forEach((img) => {
// 		let imgUrl = this.flickrApiService.getImgUrl(img);
// 		this.formattedImageList.push({
// 			link: imgUrl,
// 			// path: imgUrl,
// 			// filename: '',
// 			// alt: '',
// 			// tags: img.tags.split(' '),
// 			// url_original: img.url_o,
// 			// description: img.description._content,
// 		});
// 		this.originalImageList = this.formattedImageList;
// 		// if (this.selectedCategory.tag !== '') {
// 		// 	this.formattedImageList = this.formattedImageList.filter(
// 		// 		(filterImg) => filterImg.tags.includes(this.selectedCategory.tag)
// 		// 	);
// 		// }
// 		this.isLoaded = true;
// 	});
// 	this.originalImageList = this.formattedImageList;
// 	// if (this.selectedCategory.tag !== '') {
// 	// 	this.formattedImageList = this.formattedImageList.filter((filterImg) =>
// 	// 		filterImg.tags.includes(this.selectedCategory.tag)
// 	// 	);
// 	// }
// });
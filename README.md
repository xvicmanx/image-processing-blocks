# README #



### Introduction ###

Image Processing Blocks: It is a web tool for creating image processing pipelines visually.

### Goals ###

The purpose of this project is to provide a simple way to create image processing pipelines. You only have to drag and drop blocks,
edit them and save the results. This is an academic tool intended to be use by students that are new in the world of image processing.

### Dependencies ###

This project was developed in Javascript (NodeJs), using React along with Redux (See all the dependencies in the ```package.json``` file). This project relies on the project [https://github.com/xvicmanx/vision-web-api](https://github.com/xvicmanx/vision-web-api) as backend.

### Setup ###
Before getting the project running first you need to get the project [https://github.com/xvicmanx/vision-web-api](https://github.com/xvicmanx/vision-web-api) up and running (Follow the instructions in its README.md file).

Once the backend is up and running (assuming you have node install and npm), you just have to run:
```
npm install
```
### How to start it ###

Assuming the backend is running (See how to run the vision we api [https://github.com/xvicmanx/vision-web-api](https://github.com/xvicmanx/vision-web-api)), you just only need to run:

```
npm start
```
The project will start at port 3001.

### How to the tests ###

To run the tests you just only need to do:

```
npm run test
```

### To prepare for production ###

Just run:

```
npm run build
```

### Some screenshots of the application ###

![Alt text](https://github.com/xvicmanx/image-processing-blocks/blob/master/Screenshot%20-%20Image%20processing%20-%20editor%201.PNG?raw=true "Image processing editor")

![Alt text](https://github.com/xvicmanx/image-processing-blocks/blob/master/Screenshot%20-%20Image%20processing%20-%20editor%202.PNG?raw=true "Image processing editor")

![Alt text](https://github.com/xvicmanx/image-processing-blocks/blob/master/Screenshot%20-Image%20processing%20-%20filters%20tester.PNG?raw=true "Image processing editor")

### Supported Image Processing tasks (so far) ###

* Derivative dx and dy.
* Canny Edges
* Binary and Binary Inverted
* Transform image in to gray scale.

( See [https://github.com/xvicmanx/vision-web-api](https://github.com/xvicmanx/vision-web-api)))

Feel free to add more tasks if interested!

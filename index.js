var tf = require('@tensorflow/tfjs');
var iris = require('./iris.json');
var irisTesting = require('./testingIris.json');

// convert data
var trainingData = tf.tensor2d(iris.map(item=> [
        item.sepal_length, item.sepal_width, item.petal_length, item.petal_width
    ]
),[147,4])

// creating model
var outputData = tf.tensor2d(iris.map(item => [
    item.species === 'setosa' ? 1 : 0,
    item.species === 'virginica' ? 1 : 0,
    item.species === 'versicolor' ? 1 : 0

]), [147,3])

// compiling model
var model = tf.sequential();

model.add(tf.layers.dense({
    inputShape: [4],
    activation: "sigmoid",
    units: 5
}))

model.compile({
    loss: "meanSquaredError",
    optimizer: tf.train.adam(.06)
})

model.fit(trainingData, outputData, {epochs: 100})
    .then(() => {
        model.predict(testingData).print();
    })
// predicting model

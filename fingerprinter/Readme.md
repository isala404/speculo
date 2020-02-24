# Model 1
- CNN with 2 Fully Connected Layers
- used binary_crossentropy as the loss function
- accuracy stuck at zero

# Model 2
- Full CNN
- Used Adam optimization
- Used Mean absolute error as the loss function
- After first epoch accuracy went to 96% which is highly unlikely to happen. Which means model overfitted or something else went wrong

# Model 3
- CNN with Fully Connected Layers and Batch Normalization
- Used Adam optimization
- Used Mean absolute error as the loss function
- Trained for 100 epochs
- Loss function stopped improving after 66th epoch
- Final val_accuracy: 0.4240
- Final val_loss: 106.6698

Even though accuracy is not good we are headed in the right direction <br>
Starter Model came from https://www.pyimagesearch.com/2020/02/17/autoencoders-with-keras-tensorflow-and-deep-learning/

# Model 4
- Build upon Model 3
- Increased image size
- Increased filter size
- EarlyStopping Keras call back kicked in 11th epoch
- Found out dataset was too small
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import sys

arg1 = sys.argv[1]
arg2 = sys.argv[2]
arg3 = sys.argv[3]
arg4 = sys.argv[4]
arg5 = sys.argv[5]
arg6 = sys.argv[6]
arg7 = sys.argv[7]
arg8 = sys.argv[8]
arg9 = sys.argv[9]
arg10 = sys.argv[10]
arg11 = sys.argv[11]
arg12 = sys.argv[12]
arg13 = sys.argv[13]
arg14 = sys.argv[14]
arg15 = sys.argv[15]
arg16 = sys.argv[16]
arg17 = sys.argv[17]
arg18 = sys.argv[18]
arg19 = sys.argv[19]
arg20 = sys.argv[20]
arg21 = sys.argv[21]
arg22 = sys.argv[22]
arg23 = sys.argv[23]
arg24 = sys.argv[24]
arg25 = sys.argv[25]
arg26 = sys.argv[26]
arg27 = sys.argv[27]
arg28 = sys.argv[28]
arg29 = sys.argv[29]

url = "breast-cancer.csv"

dataset = pd.read_csv(url)

X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 30].values

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8)

from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
scaler.fit(X_train)

X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

from sklearn.neighbors import KNeighborsClassifier
classifier = KNeighborsClassifier(n_neighbors=7)
classifier.fit(X_train, y_train)


new_example = np.array([[arg1 , arg2 , arg3 , arg4 , arg5 , arg6 , arg7 , arg8 , arg9 , arg10 , arg11 , arg12 , arg13 , arg14 , arg15 , arg16 , arg17 , arg18 , arg19 , arg20 , arg21 , arg22 , arg23 , arg24 , arg25 , arg26 , arg27 , arg28 , arg29]])


scaled_example = scaler.transform(new_example)

predicted_class = classifier.predict(scaled_example)

print(predicted_class)

load("//tensorboard/defs:web.bzl", "tf_web_library")
load("//tensorboard/defs:vulcanize.bzl", "tensorboard_html_binary")

package(default_visibility = ["//tensorboard:internal"])

licenses(["notice"])  # Apache 2.0

tf_web_library(
    name = "tf_graph_app",
    srcs = [
        "tf-graph-app.html",
    ],
    path = "/tf-graph-app",
    deps = [
        "//tensorboard/components/tf_imports:polymer",
        "//tensorboard/plugins/graph/tf_graph_board",
        "//tensorboard/plugins/graph/tf_graph_controls",
        "//tensorboard/plugins/graph/tf_graph_loader",
    ],
)

tensorboard_html_binary(
    name = "binary",
    compile = True,
    input_path = "/tf-graph-app/tf-graph-app.html",
    output_path = "/tf-graph-app/binary.html",
    deps = [":tf_graph_app"],
)

load("//tensorboard/defs:web.bzl", "tf_web_library")

package(default_visibility = ["//tensorboard:internal"])

licenses(["notice"])  # Apache 2.0

tf_web_library(
    name = "tf_graph_op_compat_card",
    srcs = [
        "tf-graph-op-compat-card.html",
        "tf-graph-op-compat-list-item.html",
    ],
    path = "/tf-graph-op-compat-card",
    deps = [
        "//tensorboard/components/tf_dashboard_common",
        "//tensorboard/components/tf_imports:polymer",
        "//tensorboard/plugins/graph/tf_graph_common",
        "@org_polymer_iron_collapse",
        "@org_polymer_iron_list",
        "@org_polymer_paper_icon_button",
        "@org_polymer_paper_item",
    ],
)

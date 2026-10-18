import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "stats-13",
  "prefix": "stats13",
  "name": "Stats / Scenarios",
  "category": "stats",
  "collection": "saas",
  "description": "Stats / Scenarios for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Pick a business that looks like yours"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-13",
        "div-57"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#F4F5F1",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-58",
        "style": {
          "base": {
            "max-width": "1100px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "28px",
            "column-gap": "28px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-13",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "align-items": "center",
                "row-gap": "14px",
                "column-gap": "14px",
                "text-align": "center"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#5B616B"
                  }
                },
                "text": "Where the hours go"
              },
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              },
              {
                "tag": "div",
                "key": "div-12",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "justify-content": "center",
                    "row-gap": "8px",
                    "column-gap": "8px",
                    "margin-top": "6px"
                  }
                },
                "attrs": {
                  "role": "radiogroup",
                  "aria-label": "Scenario",
                  "data-blok-choices": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-5",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "min-width": "180px",
                        "padding-top": "12px",
                        "padding-right": "16px",
                        "padding-bottom": "12px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-3",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Solo operator"
                      },
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "1 truck, ~40 jobs/wk"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-8",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "min-width": "180px",
                        "padding-top": "12px",
                        "padding-right": "16px",
                        "padding-bottom": "12px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "true",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Small team"
                      },
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "2–3 crews, ~120 jobs/wk"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "align-items": "flex-start",
                        "row-gap": "2px",
                        "column-gap": "2px",
                        "min-width": "180px",
                        "padding-top": "12px",
                        "padding-right": "16px",
                        "padding-bottom": "12px",
                        "padding-left": "16px",
                        "border-top-left-radius": "14px",
                        "border-top-right-radius": "14px",
                        "border-bottom-right-radius": "14px",
                        "border-bottom-left-radius": "14px",
                        "cursor": "pointer",
                        "text-align": "left",
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "2px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "2px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE",
                        "background-color": "#FFFFFF",
                        "color": "#0F1115"
                      }
                    },
                    "attrs": {
                      "role": "radio",
                      "aria-checked": "false",
                      "data-blok-choice": ""
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "font-size": "16px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Growing"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "5+ crews, ~300 jobs/wk"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-57",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "16px",
                "column-gap": "16px",
                "align-items": "stretch"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-49",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "520px",
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#FFFFFF",
                    "border-top-width": "1px",
                    "border-top-style": "solid",
                    "border-top-color": "#DDE0D8",
                    "border-right-width": "1px",
                    "border-right-style": "solid",
                    "border-right-color": "#DDE0D8",
                    "border-bottom-width": "1px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#DDE0D8",
                    "border-left-width": "1px",
                    "border-left-style": "solid",
                    "border-left-color": "#DDE0D8",
                    "overflow": "hidden"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-20",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "24px 1fr auto",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "min-height": "64px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8",
                        "cursor": "pointer",
                        "opacity": "1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-18",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-15",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Scheduling and rescheduling"
                          },
                          {
                            "tag": "div",
                            "key": "div-17",
                            "style": {
                              "base": {
                                "height": "6px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "background-color": "#ECEEE8",
                                "overflow": "hidden"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-16",
                                "style": {
                                  "base": {
                                    "display": "block",
                                    "height": "100%",
                                    "width": "100%",
                                    "background-color": "#2D4BF0"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "15px"
                          }
                        },
                        "text": "9 h"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "24px 1fr auto",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "min-height": "64px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8",
                        "cursor": "pointer",
                        "opacity": "1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Confirmation calls and texts"
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "height": "6px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "background-color": "#ECEEE8",
                                "overflow": "hidden"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-23",
                                "style": {
                                  "base": {
                                    "display": "block",
                                    "height": "100%",
                                    "width": "78%",
                                    "background-color": "#2D4BF0"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-26",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "15px"
                          }
                        },
                        "text": "7 h"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "24px 1fr auto",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "min-height": "64px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8",
                        "cursor": "pointer",
                        "opacity": "1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-28",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-29",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Routing crews"
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "height": "6px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "background-color": "#ECEEE8",
                                "overflow": "hidden"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "display": "block",
                                    "height": "100%",
                                    "width": "56%",
                                    "background-color": "#2D4BF0"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-33",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "15px"
                          }
                        },
                        "text": "5 h"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-41",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "24px 1fr auto",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "min-height": "64px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8",
                        "cursor": "pointer",
                        "opacity": "1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Writing invoices"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "height": "6px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "background-color": "#ECEEE8",
                                "overflow": "hidden"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-37",
                                "style": {
                                  "base": {
                                    "display": "block",
                                    "height": "100%",
                                    "width": "67%",
                                    "background-color": "#2D4BF0"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-40",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "15px"
                          }
                        },
                        "text": "6 h"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-48",
                    "style": {
                      "base": {
                        "display": "grid",
                        "grid-template-columns": "24px 1fr auto",
                        "align-items": "center",
                        "row-gap": "14px",
                        "column-gap": "14px",
                        "min-height": "64px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#ECEEE8",
                        "cursor": "pointer",
                        "opacity": "1"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-42",
                        "style": {
                          "base": {
                            "width": "20px",
                            "height": "20px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-46",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-direction": "column",
                            "row-gap": "6px",
                            "column-gap": "6px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-43",
                            "style": {
                              "base": {
                                "font-size": "16px",
                                "font-weight": "500"
                              }
                            },
                            "text": "Chasing payments"
                          },
                          {
                            "tag": "div",
                            "key": "div-45",
                            "style": {
                              "base": {
                                "height": "6px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "background-color": "#ECEEE8",
                                "overflow": "hidden"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-44",
                                "style": {
                                  "base": {
                                    "display": "block",
                                    "height": "100%",
                                    "width": "44%",
                                    "background-color": "#2D4BF0"
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-47",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "15px"
                          }
                        },
                        "text": "4 h"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-56",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "280px",
                    "padding-top": "28px",
                    "padding-right": "28px",
                    "padding-bottom": "28px",
                    "padding-left": "28px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "space-between",
                    "row-gap": "24px",
                    "column-gap": "24px"
                  }
                },
                "attrs": {
                  "role": "status"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-52",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-50",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Hours back per month"
                      },
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "font-size": "88px",
                            "font-weight": "600",
                            "letter-spacing": "-0.05em",
                            "line-height": "0.9"
                          }
                        },
                        "text": "31"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "6px",
                        "column-gap": "6px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-53",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "About 3.9 working days"
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "font-size": "13px",
                            "line-height": "1.5",
                            "color": "#8C929B"
                          }
                        },
                        "text": "Estimates for illustration. [Replace with figures from your own customers.]"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;

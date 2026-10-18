import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "cases-03",
  "prefix": "cases03",
  "name": "Use cases / Day timeline",
  "category": "cases",
  "collection": "saas",
  "description": "Use cases / Day timeline for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Pick a seat. Watch the day."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-19",
        "div-61"
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
        "key": "div-62",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "14px",
                "column-gap": "14px",
                "max-width": "640px"
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
                "text": "A day with Harborline"
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
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-19",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "12px",
                "column-gap": "12px"
              },
              "md": {
                "grid-template-columns": "repeat(2, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              }
            },
            "attrs": {
              "role": "tablist",
              "aria-label": "Roles",
              "data-blok-choices": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                  "role": "tab",
                  "aria-selected": "true",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-4",
                    "style": {
                      "base": {
                        "width": "48px",
                        "height": "48px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "background-color": "#E8ECFE",
                        "color": "#2D4BF0"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "O"
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-5",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Owner"
                      },
                      {
                        "tag": "div",
                        "key": "div-6",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Mostly on the phone"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-13",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-9",
                    "style": {
                      "base": {
                        "width": "48px",
                        "height": "48px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "background-color": "#FDEFE4",
                        "color": "#9A4A12"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "D"
                  },
                  {
                    "tag": "div",
                    "key": "div-12",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Dispatcher"
                      },
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "At the board"
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-18",
                "style": {
                  "base": {
                    "display": "flex",
                    "align-items": "center",
                    "row-gap": "14px",
                    "column-gap": "14px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "width": "48px",
                        "height": "48px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-weight": "600",
                        "background-color": "#E5F4EA",
                        "color": "#1D6B3A"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "C"
                  },
                  {
                    "tag": "div",
                    "key": "div-17",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "2px",
                        "column-gap": "2px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "font-size": "18px",
                            "font-weight": "600"
                          }
                        },
                        "text": "Crew lead"
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "In the truck"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-61",
            "style": {
              "base": {
                "padding-top": "clamp(20px, 3vw, 32px)",
                "padding-right": "clamp(20px, 3vw, 32px)",
                "padding-bottom": "clamp(20px, 3vw, 32px)",
                "padding-left": "clamp(20px, 3vw, 32px)",
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
                "border-left-color": "#DDE0D8"
              }
            },
            "attrs": {
              "role": "tabpanel"
            },
            "children": [
              {
                "tag": "div",
                "key": "stack-187",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "width": "100%"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-60",
                    "style": {
                      "base": {
                        "list-style": "none",
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "padding-top": "0",
                        "padding-right": "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "position": "relative",
                        "display": "flex",
                        "flex-direction": "column"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "7:30"
                          },
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-22",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-24",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Coffee, not spreadsheets"
                              },
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "The week is already built from recurring jobs."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-28",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "10:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-32",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "A quote turns into a job"
                              },
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Accepted quotes book into the next open slot."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "13:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-39",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-37",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-38",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-40",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Check the numbers"
                              },
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Today’s revenue and unpaid invoices on one screen."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-44",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "16:30"
                          },
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-45",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-46",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-48",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Payments land"
                              },
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Card payments from the day show as settled."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "18:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-55",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-53",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#2D4BF0",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-54",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-56",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Phone stays in the pocket"
                              },
                              {
                                "tag": "div",
                                "key": "div-57",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Reminder texts for tomorrow already went out."
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-122",
                    "style": {
                      "base": {
                        "list-style": "none",
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "padding-top": "0",
                        "padding-right": "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "position": "relative",
                        "display": "none",
                        "flex-direction": "column"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-89",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-82",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "7:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-85",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-83",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-84",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-88",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-86",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Routes are ready"
                              },
                              {
                                "tag": "div",
                                "key": "div-87",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Every crew’s stops ordered for the shortest drive."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-97",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-90",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "8:15"
                          },
                          {
                            "tag": "div",
                            "key": "div-93",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-91",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-92",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-96",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-94",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Someone calls in sick"
                              },
                              {
                                "tag": "div",
                                "key": "div-95",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Drag their jobs across; customers get the new window."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-105",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-98",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "11:30"
                          },
                          {
                            "tag": "div",
                            "key": "div-101",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-99",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-100",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-104",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-102",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Same-day request"
                              },
                              {
                                "tag": "div",
                                "key": "div-103",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "The board shows which crew has room nearby."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-113",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-106",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "14:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-109",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-107",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-108",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-112",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-110",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Replies in one inbox"
                              },
                              {
                                "tag": "div",
                                "key": "div-111",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Customer texts land in a shared thread."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-121",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-114",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "17:00"
                          },
                          {
                            "tag": "div",
                            "key": "div-117",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-115",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#9A4A12",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-116",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-120",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-118",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Tomorrow, confirmed"
                              },
                              {
                                "tag": "div",
                                "key": "div-119",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Confirmations roll in from reminder texts."
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-184",
                    "style": {
                      "base": {
                        "list-style": "none",
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "padding-top": "0",
                        "padding-right": "0",
                        "padding-bottom": "0",
                        "padding-left": "0",
                        "position": "relative",
                        "display": "none",
                        "flex-direction": "column"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-151",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-144",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "7:45"
                          },
                          {
                            "tag": "div",
                            "key": "div-147",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-145",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-146",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-150",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-148",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Open the app"
                              },
                              {
                                "tag": "div",
                                "key": "div-149",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Today’s route, in order, with directions."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-159",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-152",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "8:30"
                          },
                          {
                            "tag": "div",
                            "key": "div-155",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-153",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-154",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-158",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-156",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "First stop"
                              },
                              {
                                "tag": "div",
                                "key": "div-157",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Gate code and a note about the dog, right there."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-167",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-160",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "9:10"
                          },
                          {
                            "tag": "div",
                            "key": "div-163",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-161",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-162",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-166",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-164",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Photos and checklist"
                              },
                              {
                                "tag": "div",
                                "key": "div-165",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Before and after shots attach to the job."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-175",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-168",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "9:12"
                          },
                          {
                            "tag": "div",
                            "key": "div-171",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-169",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-170",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-174",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-172",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Paid on the curb"
                              },
                              {
                                "tag": "div",
                                "key": "div-173",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Customer taps to pay from the text."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-183",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "76px 24px 1fr",
                            "row-gap": "14px",
                            "column-gap": "14px",
                            "align-items": "start",
                            "padding-bottom": "18px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-176",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)",
                                "font-size": "14px",
                                "color": "#5B616B",
                                "padding-top": "2px"
                              }
                            },
                            "text": "15:30"
                          },
                          {
                            "tag": "div",
                            "key": "div-179",
                            "style": {
                              "base": {
                                "position": "relative",
                                "display": "flex",
                                "justify-content": "center",
                                "height": "100%"
                              }
                            },
                            "attrs": {
                              "aria-hidden": "true"
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-177",
                                "style": {
                                  "base": {
                                    "width": "12px",
                                    "height": "12px",
                                    "margin-top": "5px",
                                    "border-top-left-radius": "50%",
                                    "border-top-right-radius": "50%",
                                    "border-bottom-right-radius": "50%",
                                    "border-bottom-left-radius": "50%",
                                    "background-color": "#1D6B3A",
                                    "box-shadow": "0 0 0 4px #FFFFFF",
                                    "z-index": "1"
                                  }
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-178",
                                "style": {
                                  "base": {
                                    "position": "absolute",
                                    "top": "14px",
                                    "bottom": "-18px",
                                    "width": "2px",
                                    "background-color": "#ECEEE8"
                                  }
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-182",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "4px",
                                "column-gap": "4px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-180",
                                "style": {
                                  "base": {
                                    "font-size": "17px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Done for the day"
                              },
                              {
                                "tag": "div",
                                "key": "div-181",
                                "style": {
                                  "base": {
                                    "font-size": "15px",
                                    "line-height": "1.5",
                                    "color": "#4E545D"
                                  }
                                },
                                "text": "Hours log themselves from the first and last stop."
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
    }
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

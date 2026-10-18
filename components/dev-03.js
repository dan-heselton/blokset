import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "dev-03",
  "prefix": "dev03",
  "name": "Developers / Webhook builder",
  "category": "dev",
  "collection": "saas",
  "description": "Developers / Webhook builder for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Hear about every job the moment it moves"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-28",
        "div-37"
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
        "key": "div-38",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-wrap": "wrap",
            "row-gap": "clamp(28px, 4vw, 56px)",
            "column-gap": "clamp(28px, 4vw, 56px)"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-28",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "400px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "20px",
                "column-gap": "20px"
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
                "text": "Webhooks"
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
                "key": "div-5",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "8px",
                    "column-gap": "8px",
                    "font-size": "14px",
                    "color": "#4E545D"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "text-4",
                    "text": "Endpoint URL"
                  },
                  {
                    "tag": "div",
                    "key": "div-3",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "12px",
                        "padding-bottom": "0",
                        "padding-left": "12px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CFD3CA",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CFD3CA",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CFD3CA",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CFD3CA",
                        "background-color": "#FFFFFF",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "14px",
                        "color": "#0F1115"
                      }
                    },
                    "text": "https://your-app.com/hooks/harborline"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-27",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "padding-top": "0",
                    "padding-right": "0",
                    "padding-bottom": "0",
                    "padding-left": "0",
                    "border-top-width": "0",
                    "border-top-style": "none",
                    "border-top-color": "transparent",
                    "border-right-width": "0",
                    "border-right-style": "none",
                    "border-right-color": "transparent",
                    "border-bottom-width": "0",
                    "border-bottom-style": "none",
                    "border-bottom-color": "transparent",
                    "border-left-width": "0",
                    "border-left-style": "none",
                    "border-left-color": "transparent",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "8px",
                    "column-gap": "8px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#4E545D",
                        "margin-bottom": "8px"
                      }
                    },
                    "text": "Events"
                  },
                  {
                    "tag": "div",
                    "key": "div-10",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-7",
                        "style": {
                          "base": {
                            "width": "18px",
                            "height": "18px",
                            "accent-color": "#2D4BF0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-8",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px"
                          }
                        },
                        "text": "job.created"
                      },
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "margin-left": "auto",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "A job is booked"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-14",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-11",
                        "style": {
                          "base": {
                            "width": "18px",
                            "height": "18px",
                            "accent-color": "#2D4BF0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-12",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px"
                          }
                        },
                        "text": "job.rescheduled"
                      },
                      {
                        "tag": "div",
                        "key": "div-13",
                        "style": {
                          "base": {
                            "margin-left": "auto",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Date or crew changed"
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
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2D4BF0",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#2D4BF0",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2D4BF0",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#2D4BF0"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-15",
                        "style": {
                          "base": {
                            "width": "18px",
                            "height": "18px",
                            "accent-color": "#2D4BF0"
                          }
                        },
                        "attrs": {
                          "aria-checked": "true"
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px"
                          }
                        },
                        "text": "job.completed"
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "margin-left": "auto",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Crew marks it done"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "width": "18px",
                            "height": "18px",
                            "accent-color": "#2D4BF0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-20",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px"
                          }
                        },
                        "text": "invoice.paid"
                      },
                      {
                        "tag": "div",
                        "key": "div-21",
                        "style": {
                          "base": {
                            "margin-left": "auto",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "Payment received"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-26",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "row-gap": "12px",
                        "column-gap": "12px",
                        "min-height": "48px",
                        "padding-top": "0",
                        "padding-right": "14px",
                        "padding-bottom": "0",
                        "padding-left": "14px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "cursor": "pointer",
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#E2E4DE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#E2E4DE",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#E2E4DE",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#E2E4DE"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-23",
                        "style": {
                          "base": {
                            "width": "18px",
                            "height": "18px",
                            "accent-color": "#2D4BF0"
                          }
                        }
                      },
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "14px"
                          }
                        },
                        "text": "customer.created"
                      },
                      {
                        "tag": "div",
                        "key": "div-25",
                        "style": {
                          "base": {
                            "margin-left": "auto",
                            "font-size": "13px",
                            "color": "#5B616B"
                          }
                        },
                        "text": "New customer added"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-37",
            "style": {
              "base": {
                "flex-grow": "1",
                "flex-shrink": "1",
                "flex-basis": "440px",
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "12px",
                "column-gap": "12px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-33",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "0%",
                    "display": "flex",
                    "flex-direction": "column",
                    "border-top-left-radius": "18px",
                    "border-top-right-radius": "18px",
                    "border-bottom-right-radius": "18px",
                    "border-bottom-left-radius": "18px",
                    "background-color": "#0F1115",
                    "color": "#C9CDD4",
                    "overflow": "hidden"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "center",
                        "padding-top": "14px",
                        "padding-right": "18px",
                        "padding-bottom": "14px",
                        "padding-left": "18px",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-29",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "13px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "POST your endpoint"
                      },
                      {
                        "tag": "div",
                        "key": "div-30",
                        "style": {
                          "base": {
                            "font-family": "token(font-saas-mono)",
                            "font-size": "12px",
                            "color": "#8C929B"
                          }
                        },
                        "text": "1 event"
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-32",
                    "style": {
                      "base": {
                        "margin-top": "0",
                        "margin-right": "0",
                        "margin-bottom": "0",
                        "margin-left": "0",
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "0%",
                        "min-height": "300px",
                        "padding-top": "18px",
                        "padding-right": "18px",
                        "padding-bottom": "18px",
                        "padding-left": "18px",
                        "overflow": "auto",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "13px",
                        "line-height": "1.7"
                      }
                    },
                    "text": "{ \"type\": \"job.completed\", \"created\": \"2026-10-13T09:12:00Z\", \"data\": { \"job_id\": \"job_8f2\", \"photos\": 2, \"duration_min\": 18 } }"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-36",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "align-items": "center",
                    "row-gap": "12px",
                    "column-gap": "12px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "height": "48px",
                        "padding-top": "0",
                        "padding-right": "20px",
                        "padding-bottom": "0",
                        "padding-left": "20px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "border-top-width": "0",
                        "border-top-style": "none",
                        "border-top-color": "transparent",
                        "border-right-width": "0",
                        "border-right-style": "none",
                        "border-right-color": "transparent",
                        "border-bottom-width": "0",
                        "border-bottom-style": "none",
                        "border-bottom-color": "transparent",
                        "border-left-width": "0",
                        "border-left-style": "none",
                        "border-left-color": "transparent",
                        "cursor": "pointer",
                        "font-weight": "500",
                        "background-color": "#A9B4F5",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center"
                      }
                    },
                    "attrs": {
                      "aria-disabled": "true"
                    },
                    "text": "Send test event"
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "font-size": "14px",
                        "color": "#5B616B"
                      }
                    },
                    "attrs": {
                      "role": "status"
                    },
                    "text": "Add an https URL to send a test."
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
